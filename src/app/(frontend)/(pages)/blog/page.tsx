import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { Calendar1Icon, User2Icon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { AuroraText } from '@/components/animation/aural-text'

interface BlogsRootPageProps {
  searchParams: Promise<{ page?: string }>
}

const BlogsRootPage = async ({ searchParams }: BlogsRootPageProps) => {
  const currentPage = Number((await searchParams).page) || 1
  const payload = await getPayload({ config })

  const { docs, hasNextPage, hasPrevPage, page, nextPage, totalPages, limit, totalDocs, prevPage } =
    await payload.find({
      collection: 'blogs',
      limit: 6,
      page: currentPage,
      pagination: true,
      sort: '-publishedDate',
    })

  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, page! - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="container mx-auto md:py-8">
      <h2 className="text-5xl text-center font-bold text-gray-900 mb-6">
        Explore Our
        <AuroraText>
          <span className="text-primary px-2">Blogs</span>
        </AuroraText>
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover the latest insights and tips on physiotherapy, wellness, and health.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
        {docs.map((doc) => {
          return (
            <Link key={doc.id} className="h-full" href={`/blog/${doc.slug}`}>
              <Card className="flex flex-col h-full mb-6 pt-0 p-3 hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="w-full aspect-square relative rounded-t-xl overflow-hidden">
                  <Image
                    alt={(doc.featuredImage as Media).alt}
                    src={(doc.featuredImage as Media).url!}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between gap-y-2 px-2 mt-2">
                  {/* Top Info: date + author */}
                  <div>
                    <div className="flex items-center text-gray-500 text-sm mb-1">
                      <Calendar1Icon className="w-4 h-4 text-gray-500" />
                      <span className="ml-1">
                        {new Date(doc.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User2Icon className="w-4 h-4 text-gray-500" />
                      <span className="ml-1">{doc['Author Name']}</span>
                    </div>
                  </div>

                  {/* Title and Excerpt */}
                  <div>
                    <CardTitle>
                      <h2 className="text-xl font-semibold line-clamp-2">{doc.name}</h2>
                    </CardTitle>
                    <CardDescription className="line-clamp-4">{doc.excerpt}</CardDescription>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages >= 1 && (
        <div className="flex flex-col items-center space-y-4 px-4 py-8">
          {/* Pagination Info */}
          <div className="text-sm text-gray-600">
            Showing {(page! - 1) * limit + 1} to {Math.min(page! * limit, totalDocs)} of {totalDocs}{' '}
            results
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <Button variant="outline" size="sm" disabled={!hasPrevPage} asChild={hasPrevPage}>
              {hasPrevPage ? (
                <Link href={`?page=${prevPage}`}>
                  <ChevronLeftIcon className="w-4 h-4 mr-1" />
                  Previous
                </Link>
              ) : (
                <>
                  <ChevronLeftIcon className="w-4 h-4 mr-1" />
                  Previous
                </>
              )}
            </Button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {/* First page */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="?page=1">1</Link>
                  </Button>
                  {getPageNumbers()[0] > 2 && <span className="px-2 py-1 text-gray-500">...</span>}
                </>
              )}

              {/* Visible page numbers */}
              {getPageNumbers().map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={pageNum === page ? 'default' : 'outline'}
                  size="sm"
                  asChild={pageNum !== page}
                >
                  {pageNum === page ? (
                    <span>{pageNum}</span>
                  ) : (
                    <Link href={`?page=${pageNum}`}>{pageNum}</Link>
                  )}
                </Button>
              ))}

              {/* Last page */}
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                <>
                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                    <span className="px-2 py-1 text-gray-500">...</span>
                  )}
                  <Button variant="default" size="sm" asChild>
                    <Link href={`?page=${totalPages}`}>{totalPages}</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Next Button */}
            <Button variant="default" size="sm" disabled={!hasNextPage} asChild={hasNextPage}>
              {hasNextPage ? (
                <Link href={`?page=${nextPage}`}>
                  Next
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              ) : (
                <>
                  Next
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogsRootPage
