'use client'

import { useEffect, useRef, useState } from 'react'

type TOCItem = { id: string; text: string; level: number }

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function processHtml(contentHtml: string, setToc: (toc: TOCItem[]) => void): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(contentHtml, 'text/html')

  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[]
  const used = new Set<string>()

  headings.forEach((h) => {
    const base = slugify(h.textContent || 'heading')
    let slug = base
    let i = 2
    while (used.has(slug)) {
      slug = `${base}-${i++}`
    }
    used.add(slug)
    h.id = slug
  })

  // Make outbound links safe
  const links = Array.from(doc.querySelectorAll('a')) as HTMLAnchorElement[]
  links.forEach((a) => {
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
  })

  // Build TOC
  const tocItems: TOCItem[] = headings
    .filter((h) => ['H1', 'H2', 'H3'].includes(h.tagName))
    .map((h) => ({
      id: h.id,
      text: (h.textContent || '').trim(),
      level: h.tagName === 'H1' ? 1 : h.tagName === 'H2' ? 2 : 3,
    }))

  setToc(tocItems)
  return doc.body.innerHTML
}

export default function BlogContent({ contentHtml = '<div></div>' }: { contentHtml?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [processedHtml, setProcessedHtml] = useState(contentHtml)

  // Process HTML on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const htmlWithIds = processHtml(contentHtml, setToc)
      setProcessedHtml(htmlWithIds)
    }
  }, [contentHtml])

  const handleTocClick = (e: Event, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const offset = 100
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
      setActiveId(targetId)
    }
  }

  // TOC rendering
  useEffect(() => {
    const tocContainer = document.getElementById('toc')
    if (!tocContainer) return
    tocContainer.innerHTML = ''

    toc.forEach((item) => {
      const a = document.createElement('a')
      a.href = `#${item.id}`
      a.textContent = item.text
      a.className = [
        'block rounded px-2 py-1.5 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors duration-200',
        item.level === 1 ? 'font-bold text-neutral-700' : '',
        item.level === 2 ? 'ml-4 font-semibold text-neutral-600' : 'text-neutral-800',
        item.level === 3 ? 'ml-8 text-neutral-600' : 'text-neutral-800',
        activeId === item.id
          ? 'bg-primary/20 text-primary-700 font-medium border-l-4 border-primary pl-2'
          : '',
      ]
        .filter(Boolean)
        .join(' ')

      a.addEventListener('click', (e) => handleTocClick(e, item.id))
      tocContainer.appendChild(a)
    })

    return () => {
      const links = tocContainer.querySelectorAll('a')
      links.forEach((link) => link.replaceWith(link.cloneNode(true)))
    }
  }, [toc, activeId])

  // Intersection Observer for active heading
  useEffect(() => {
    if (!processedHtml || !containerRef.current) return

    const headings = Array.from(
      containerRef.current.querySelectorAll('h1[id], h2[id], h3[id]'),
    ) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (!id) return
          if (entry.isIntersecting) {
            setActiveId(id)
            document
              .querySelectorAll('.active-heading')
              .forEach((h) => h.classList.remove('active-heading'))
            entry.target.classList.add('active-heading')
          }
        })
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0, 1.0] },
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [processedHtml])

  return (
    <>
      <div
        ref={containerRef}
        className={`
          prose prose-neutral max-w-none
          prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3
          prose-h3:text-xl prose-h3:font-medium prose-h3:mt-4 prose-h3:mb-2
        `}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
      <style jsx global>{`
        .active-heading {
          scroll-margin-top: 100px;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent);
        }
      `}</style>
    </>
  )
}
