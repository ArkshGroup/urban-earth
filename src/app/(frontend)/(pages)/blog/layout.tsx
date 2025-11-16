import { Metadata } from 'next'
import React from 'react'
import { siteConfig } from '@/config/seo.config'

export const metadata: Metadata = {
  title: 'Explore Our Latest Blog, Articles & News',
  description:
    'Read the latest articles, tips, and news from Nirvana. Stay updated on physiotherapy and  rehabilitation topics in Nepal.',
  keywords: [
    'physiotherapy blog Nepal',
    'rehabilitation articles',
    'wellness tips Nepal',
    'Nirvana Physiotherapy blog',
    'health news Kathmandu',
    'physiotherapy updates Bhaktapur',
    'sports injury advice Nepal',
    'back pain articles Nepal',
    'wellness blog Bhaktapur',
  ],
  openGraph: {
    title: 'Blog | Nirvana Physiotherapy & Wellness Center',
    description:
      'Explore our blog for expert advice, news, and tips on physiotherapy, rehabilitation, and wellness from Nirvana Physiotherapy & Wellness Center.',
    url: `${siteConfig.url}/blog`,
    siteName: 'Nirvana Physiotherapy & Wellness Center',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Nirvana Physiotherapy Blog Nepal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Nirvana Physiotherapy & Wellness Center',
    description:
      'Stay informed with the latest blog posts from Nirvana Physiotherapy & Wellness Center on physiotherapy, rehabilitation, and wellness in Nepal.',
    images: [''],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default Layout
