import { Metadata } from 'next'
import React from 'react'
import { siteConfig } from '@/config/seo.config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Explore Our Latest Flooring Tips, Interior Trends & Product News',
  description:
    'Read the latest articles, guides, and news from Urban Earth. Stay updated on flooring trends, tiles and carpet tips, and interior design inspiration in Nepal.',
  keywords: [
    'flooring blog Nepal',
    'tiles articles Nepal',
    'carpet tips Nepal',
    'interior design blog Nepal',
    'Urban Earth flooring news',
    'vinyl flooring guide Nepal',
    'home renovation Nepal',
    'office flooring ideas Nepal',
    'interior trends Kathmandu',
  ],
  openGraph: {
    title: 'Blog | Urban Earth – Flooring, Tiles & Carpet in Nepal',
    description:
      'Explore our blog for expert advice, product updates, and design tips on flooring, tiles, carpets, and interior solutions by Urban Earth Nepal.',
    url: `${siteConfig.url}/blog`,
    siteName: 'Urban Earth',
    images: [
      {
        url: '', // add OG image URL when available
        width: 1200,
        height: 630,
        alt: 'Urban Earth Flooring Blog Nepal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Urban Earth – Flooring, Tiles & Carpet in Nepal',
    description:
      'Stay informed with the latest articles and updates from Urban Earth, covering flooring tips, tile guides, carpet care, and interior trends in Nepal.',
    images: [''], // add Twitter OG image when available
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default Layout
