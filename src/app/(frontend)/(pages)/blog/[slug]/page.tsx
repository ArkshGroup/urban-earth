import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'
import type { Media } from '@/payload-types'
import { User, Clock, Calendar1Icon, User2Icon, EyeIcon } from 'lucide-react'

import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import BlogContentWrapper from './blog-wrapper'
import { generateBlogSchemaOrg, siteConfig } from '@/config/seo.config'
import ShareButtons from '@/app/(frontend)/_components/blog/share-button'
import { incrementBlogView } from '@/app/(frontend)/_mutation/blog_view.mutataion'

const findBlogBySlug = async (slug: string) => {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error('Error finding blog by slug:', error)
    return null
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blogs',
    limit: 1000,
  })

  return result.docs.map((doc) => ({
    slug: doc.slug!,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const docs = await findBlogBySlug(slug)
  await incrementBlogView({
    data: {
      blogSlug: slug,
    },
  })

  if (!docs) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: docs.meta?.title || docs.name,
    description: docs.meta?.description || undefined,
    openGraph: {
      title: docs.meta?.title || docs.name,
      description: docs.meta?.description || undefined,
      images: (docs.featuredImage as Media)?.url
        ? [{ url: (docs.featuredImage as Media).url as string }]
        : undefined,
      type: 'article',
      siteName: siteConfig.name,
      countryName: 'Nepal',
      publishedTime: docs.publishedDate || new Date().toISOString(),
      url: `${siteConfig.url}/blog/${docs.slug}`,
      section: 'Blogs',
      authors: docs['Author Name'] ? [docs['Author Name']] : undefined,
    },
    publisher: siteConfig.name,
    keywords: docs.meta?.keywords?.split(',').map((keyword) => keyword.trim()),
    creator: docs['Author Name'] || undefined,
    alternates: {
      canonical: `${siteConfig.url}/blog/${docs.slug}`,
    },
    twitter: {
      title: docs.meta?.title || docs.name,
      description: docs.meta?.description || undefined,
      images: (docs.featuredImage as Media)?.url
        ? [(docs.featuredImage as Media).url as string]
        : undefined,
      creator: docs['Author Name'] || undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    appleWebApp: {
      capable: true,
      title: docs.meta?.title || docs.name,
      statusBarStyle: 'default',
      startupImage: '/apple-touch-icon.png',
    },
    abstract: docs.excerpt || docs.meta?.description || undefined,
    applicationName: 'Urban Earth',
    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },
    authors: [
      {
        name: docs['Author Name'] || 'Unknown Author',
        url: `${siteConfig.url}/blog/${docs.slug}`,
      },
    ],
  }
}

export default async function BlogBySlug({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const [blog, relatedBlogs] = await Promise.all([
    findBlogBySlug(slug),
    payload.find({
      collection: 'blogs',
      where: {
        slug: {
          not_equals: slug,
        },
      },
      limit: 3,
      sort: '-publishedDate',
    }),
  ])

  if (!blog) {
    return (
      <div className="min-h-screen bg-white text-neutral-900">
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-neutral-900">Blog post not found</h1>
            <p className="mt-2 text-neutral-600">The requested blog post could not be found.</p>
          </div>
          <div className=" flex items-center">
            <Link
              href="/blog"
              className="mt-6 mx-auto inline-block rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const structuredData = generateBlogSchemaOrg(blog)

  return (
    <>
      <script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <div className="">
        <main className="min-h-screen bg-white text-neutral-900">
          {/* Body */}
          <section className="mx-auto  px-4 md:py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Content */}
              <article className="lg:col-span-8">
                {/* top hero image */}
                <section className="relative">
                  <div className=" w-full  pb-2 ">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="relative md:aspect-16/14 w-full max-sm:h-[35vh]">
                        <Image
                          src={(blog.featuredImage as Media).url || '/placeholder.svg'}
                          alt={(blog.featuredImage as Media).alt || blog.name}
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 1200px"
                          quality={100}
                          placeholder="blur"
                          blurDataURL="/placeholder.svg"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </section>
                {/* desc */}
                <div className="">
                  <div className="mb-6 flex flex-col md:flex-row gap-y-4 items-start md:items-center justify-between">
                    <div className="text-sm flex-col gap-y-2 md:flex-row flex gap-x-4 text-neutral-500">
                      {formatDate(blog.updatedAt) || 'recently'}
                      <div className="flex items-center gap-1">
                        <span className="sr-only">Author</span>
                        <User className="h-4 w-4" aria-hidden="true" />
                        {blog['Author Name']}
                      </div>
                      <div className="flex items-center">
                        <span className="sr-only">Read time</span>
                        <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                        {blog.readTime}
                      </div>
                      <div className="flex items-center">
                        <span className="sr-only">View</span>
                        <EyeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                        {blog.views || 0} views
                      </div>
                    </div>
                    <ShareButtons />
                  </div>
                </div>
                <BlogContentWrapper contentHtml={blog.content_html!} />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-700">
                      On this page
                    </h3>
                    {/* TOC lives inside BlogContent; we mirror anchors with CSS. */}
                    <ScrollArea className="h-[calc(100vh-200px)]">
                      <div id="toc" className="space-y-2 text-sm" />
                    </ScrollArea>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                    <ShareButtons fullWidth />
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <section>
            <h2 className=" text-4xl text-center text-primary font-bold pt-8">
              Related Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
              {relatedBlogs.docs.map((doc) => {
                return (
                  <Link key={doc.id} className=" h-full" href={`/blog/${doc.slug}`}>
                    <Card className="mb-6 pt-0 p-3 hover:shadow-lg h-full transition-shadow">
                      <div className="w-full aspect-5/3 relative rounded-t-xl overflow-hidden">
                        <Image
                          alt={(doc.featuredImage as Media).alt}
                          src={(doc.featuredImage as Media).url!}
                          fill
                          className="object-cover rounded-t-xl"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </div>
                      <div className="flex flex-col justify-between px-2 gap-y-2">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar1Icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500 ml-1">
                            {new Date(doc.publishedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-start md:items-center text-gray-500 text-sm">
                          <User2Icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500 ml-1">
                            The Nirvana Physiotherapy and Wellness Center
                          </span>
                        </div>
                      </div>
                      <CardTitle>
                        <h2 className="text-xl font-semibold line-clamp-2">{doc.name}</h2>
                      </CardTitle>
                      <CardDescription className="line-clamp-4">{doc.excerpt}</CardDescription>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
