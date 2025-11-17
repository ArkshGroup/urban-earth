import { Footer } from '@/app/(frontend)/_components/layout/footer'
import Navbar from '@/app/(frontend)/_components/layout/navbar'
import { Metadata } from 'next'
import React from 'react'
import '../../global.css'
import { Toaster } from '@/components/ui/sonner'
import { siteConfig } from '@/config/seo.config'
export const metadata: Metadata = {
  title: 'Urban Earth | Premium Flooring, Tiles, Carpets & Interior Solutions in Nepal',
  description:
    'Discover the best flooring, tiles, carpets, marbles and interior surface solutions in Nepal. Urban Earth offers premium-quality materials for homes, offices, hotels and commercial spaces with modern designs and durable finishes.',
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Arksh Group',
  authors: [{ name: 'Urban Earth Nepal' }, { name: 'Arksh Group' }],
  keywords: [
    'Buy flooring materials in Nepal',
    'Best tiles in Nepal',
    'Carpet shop Nepal',
    'Marbles and granite Nepal',
    'Interior flooring Nepal',
    'Urban Earth Nepal',
    'Wooden flooring Nepal',
    'Vinyl flooring Nepal',
    'Laminate flooring Nepal',
    'Luxury carpet Nepal',
    'Premium tiles Kathmandu',
    'Home renovation Nepal',
    'Commercial flooring Nepal',
    'Modern interior materials Nepal',
    'Urban Earth flooring and tiles',
    'Marble flooring in Nepal',
  ],
  openGraph: {
    title: 'Urban Earth | Premium Flooring, Tiles, Carpets & Marbles in Nepal',
    description:
      'Explore Urban Earth’s wide collection of high-quality flooring, tiles, carpets, marbles and interior design products in Nepal.',
    url: siteConfig.url,
    siteName: 'Urban Earth',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: siteConfig.url + '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban Earth Nepal - Best Flooring and Tiles Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Earth Nepal | Flooring, Tiles, Carpets & Interiors',
    description:
      'Urban Earth provides premium flooring, tiles, carpets and marble products in Nepal. Explore top-quality surface materials with elegant designs fit for every interior.',
    images: [''], // Add image when available
  },
  category: 'Interior, Flooring, Tiles, Carpets',
  alternates: {
    canonical: siteConfig.url,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
