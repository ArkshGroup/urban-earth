// BlogContentWrapper.tsx
'use client'

import BlogContent from '@/app/(frontend)/_components/blog/blog-content'

export default function BlogContentWrapper({ contentHtml }: { contentHtml: string }) {
  return <BlogContent contentHtml={contentHtml} />
}
