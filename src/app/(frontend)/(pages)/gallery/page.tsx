import React, { Suspense } from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { Media } from '@/payload-types'
import { Metadata } from 'next'
import { siteConfig } from '@/config/seo.config'
import { AuroraText } from '@/components/animation/aural-text'
import Gallery from '../../_components/gallery/gallery-grid'

export const metadata: Metadata = {
  title: 'Gallery | Urban Earth - Flooring, Rugs & Mats Nepal',
  description:
    'Explore the gallery of Urban Earth to see our premium flooring, rugs, mats, and vinyl designs available in Nepal. Perfect solutions for homes, offices, and commercial spaces.',
  keywords: [
    'flooring Nepal',
    'rugs Kathmandu',
    'mats Nepal',
    'vinyl flooring Kathmandu',
    'laminate flooring Nepal',
    'SPC flooring Nepal',
    'PVC flooring Nepal',
    'cushion mats Nepal',
    'Urban Earth gallery',
    'flooring showroom Nepal',
  ],
  openGraph: {
    title: 'Gallery | Urban Earth - Flooring, Rugs & Mats Nepal',
    description:
      'Browse Urban Earth’s gallery to see premium flooring, rugs, and mats designed for style and durability in Nepal.',
    url: `${siteConfig.url}/gallery`,
    siteName: 'Urban Earth',
    images: [
      {
        url: '/og-image-gallery.jpg', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Urban Earth Flooring Gallery Nepal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Urban Earth - Flooring, Rugs & Mats Nepal',
    description:
      'Explore Urban Earth’s gallery of stylish and durable flooring, rugs, and mats in Nepal.',
    images: ['/og-image-gallery.jpg'],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
}

const GalleryRootPage = async () => {
  const payload = await getPayload({ config })
  const gallery = await payload.findGlobal({
    slug: 'gallery',
  })

  interface GalleryImage {
    url: string
    alt: string
    height: number
    width: number
    id: number | null | undefined
  }

  const images: GalleryImage[] =
    gallery?.images?.map((img) => ({
      url: (img.image as Media)?.url || '/placeholder.svg',
      alt: (img.image as Media)?.alt || 'Gallery Image',
      height: (img.image as Media)?.height || 300,
      width: (img.image as Media)?.width || 300,
      id: (img.image as Media)?.id || null,
    })) || []

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Explore Our{' '}
            <AuroraText>
              <span className="text-primary px-2"> Gallery</span>
            </AuroraText>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover Urban Earth’s wide range of premium flooring, rugs, and mats available across
            Nepal for homes, offices, and commercial spaces.
          </p>
        </div>
        <Suspense fallback={FallBackSkeleton()}>
          <Gallery galleryImages={images} />
        </Suspense>
      </div>
    </div>
  )
}

export default GalleryRootPage

const FallBackSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
        >
          <div className="aspect-square overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-2xl" />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}
