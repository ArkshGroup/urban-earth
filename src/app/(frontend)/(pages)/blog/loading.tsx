// components/skeletons/BlogsRootPageSkeleton.tsx

import React from 'react'
import { Card } from '@/components/ui/card'
import { Calendar1Icon, User2Icon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { AuroraText } from '@/components/animation/aural-text'

const BlogsRootPageSkeleton = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 opacity-50 lg:grid-cols-3 gap-4 px-4 py-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="mb-6 pt-0 p-3 h-full animate-pulse">
            {/* Image Skeleton */}
            <div className="bg-gray-200 w-full h-48 rounded-t-xl" />

            <div className="flex flex-col justify-between px-2 gap-y-2 mt-4">
              {/* Date and Author Skeletons */}
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar1Icon className="w-4 h-4 text-gray-300" />
                <div className="bg-gray-200 h-4 w-24 ml-1 rounded" />
              </div>
              <div className="flex items-start md:items-center text-gray-500 text-sm">
                <User2Icon className="w-4 h-4 text-gray-300" />
                <div className="bg-gray-200 h-4 w-48 ml-1 rounded" />
              </div>
            </div>

            {/* Title Skeleton */}
            <div className="px-2 mt-4">
              <div className="bg-gray-200 h-6 w-3/4 rounded" />
              <div className="bg-gray-200 h-6 w-2/3 mt-2 rounded" />
            </div>

            {/* Excerpt Skeleton */}
            <div className="px-2 mt-4 space-y-2">
              <div className="bg-gray-200 h-4 rounded" />
              <div className="bg-gray-200 h-4 rounded" />
              <div className="bg-gray-200 h-4 w-5/6 rounded" />
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex flex-col items-center space-y-4 px-4 py-8 animate-pulse">
        {/* Pagination Info Skeleton */}
        <div className="bg-gray-200 h-4 w-64 rounded" />

        {/* Pagination Controls Skeleton */}
        <div className="flex items-center space-x-2">
          {/* Previous Button Skeleton */}
          <div className="flex items-center px-4 py-2 bg-gray-200 rounded-md">
            <ChevronLeftIcon className="w-4 h-4 text-gray-400 mr-1" />
            <div className="bg-gray-300 h-4 w-16 rounded" />
          </div>

          {/* Page Numbers Skeleton */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-gray-200 h-8 w-8 rounded-md" />
            ))}
          </div>

          {/* Next Button Skeleton */}
          <div className="flex items-center px-4 py-2 bg-gray-200 rounded-md">
            <div className="bg-gray-300 h-4 w-16 rounded" />
            <ChevronRightIcon className="w-4 h-4 text-gray-400 ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsRootPageSkeleton
