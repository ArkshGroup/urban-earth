'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  description: any
  thumbnailImage: string
  images?: string[]
  cataloguePDF?: string
}

export default function ProductDetailsContainer({ product }: { product: Product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? (product?.images?.length || 1) - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === (product?.images?.length || 1) - 1 ? 0 : prev + 1))
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Thumbnail Section */}
      <div className="w-full h-screen max-h-[600px]  flex items-center justify-center overflow-hidden relative">
        <Image
          fill
          src={product.thumbnailImage || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl  text-white text-center text-balance">
            {product.name}
          </h1>
          <h2 className="text-2xl md:text-3xl   text-white  text-center mb-4">
            {product.shortDescription}
          </h2>
        </div>

        <div className=" absolute bottom-40">
          <ChevronLeft size={40} className="text-white -rotate-90  animate-going-down " />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className=" mx-auto">
            <RichText data={product.description} />
          </p>
        </div>

        {product.images && product.images.length > 0 && (
          <div className="space-y-6">
            {/* Main Slider */}
            <div className="relative group bg-slate-100 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <Image
                  fill
                  src={
                    product.images?.[selectedImageIndex] || '/placeholder.svg?height=600&width=900'
                  }
                  alt={`${product.name} view ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              {(product.images?.length || 0) > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {product.images?.length || 0}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {(product.images?.length || 0) > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-slate-900'
                        : 'border-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={image || '/placeholder.svg'}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Image Slider Gallery */}
        {/* catalogue PDF */}
        {product.cataloguePDF && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Product Catalogue</h3>
            <div className="border rounded-lg overflow-hidden">
              <iframe
                src={product.cataloguePDF}
                className="w-full h-[600px]"
                title="Product Catalogue PDF"
              />
            </div>
            <div className="mt-2"></div>
          </div>
        )}
      </div>
    </article>
  )
}
