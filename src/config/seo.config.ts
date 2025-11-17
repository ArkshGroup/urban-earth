import { WithContext, WebPage, BlogPosting, BreadcrumbList } from 'schema-dts'
import { Blog, Media } from '@/payload-types'

export const siteConfig = {
  name: 'Nirvana Physiotherapy and Wellness Center',
  description:
    'Official website of Nirvana Physiotherapy and Wellness Center in Kathmandu, Nepal. We offer holistic treatments including physiotherapy, osteopathy, chiropractic, and Ayurvedic healing.',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://www.urbanearth.com.np'
      : 'http://localhost:3000',
  twitterTitle: 'Nirvana Physiotherapy & Wellness | Official Website',
  twitterDescription:
    'Your guide to holistic health and wellness in Nepal. Specializing in back pain, spinal alignment, manual therapy, and more.',
}
export const webPageSchemaOrg: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Urban Earth | Flooring, Tiles, Carpets & Interior Materials in Nepal',
  description:
    'Urban Earth is a leading flooring, tiles, carpets, vinyl, laminate, and marble supplier in Nepal. Explore premium interior materials for homes, offices, hotels, and commercial spaces.',
  url: siteConfig.url,

  image: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/opengraph-image.jpeg`, // replace when the final OG image exists
    caption: 'Urban Earth Nepal - Premium Flooring and Tiles Supplier',
  },

  author: {
    '@type': 'Organization',
    name: 'Urban Earth Nepal',
    url: siteConfig.url,
  },

  publisher: {
    '@type': 'Organization',
    name: 'Urban Earth Nepal',
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.webp`, // replace with actual logo path
      width: '300',
      height: '90',
    },
  },

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': siteConfig.url,
  },

  about: {
    '@type': 'Thing',
    name: [
      'Urban Earth Nepal',
      'Flooring materials Nepal',
      'Tiles supplier Kathmandu',
      'Carpet showroom Nepal',
      'Vinyl flooring Nepal',
      'Laminate flooring Nepal',
      'Marble & granite Nepal',
      'Interior design materials Nepal',
      'Wooden flooring Nepal',
      'Commercial flooring Nepal',
      'Home renovation Nepal',
      'Interior showroom Kathmandu',
      'Flooring brand Nepal',
    ],
  },

  keywords:
    'Urban Earth Nepal, flooring Nepal, tiles Nepal, carpets Nepal, marble Nepal, granite Nepal, vinyl flooring, laminate flooring, wooden flooring, interior materials Kathmandu, flooring showroom Nepal, home renovation Nepal',
}
export const webSiteBreadcrumbSchemaOrg: WithContext<BreadcrumbList> = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'HOME',
      item: `${siteConfig.url}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'ABOUT US',
      item: `${siteConfig.url}/about-us`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Physiotherapy Services',
      item: `${siteConfig.url}/services/physiotherapy-service-in-kathmandu-and-bhaktapur`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Osteopathy Services',
      item: `${siteConfig.url}/services/osteopathy-service-in-kathmandu-and-bhaktapur`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Chiropractic Services',
      item: `${siteConfig.url}/services/chiropractic-service-in-kathmandu-and-bhaktapur`,
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Ayurvedic Healing Services',
      item: `${siteConfig.url}/services/ayurvedic-healing-service-in-kathmandu-and-bhaktapur`,
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Contact Us',
      item: `${siteConfig.url}/contact-us`,
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'BENEFITS',
      item: `${siteConfig.url}/benefits`,
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'CONDITIONS TREATED',
      item: `${siteConfig.url}/conditions-treated`,
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'MEMBERSHIP',
      item: `${siteConfig.url}/membership`,
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'BLOGS',
      item: `${siteConfig.url}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 12,
      name: 'GALLERY',
      item: `${siteConfig.url}/gallery`,
    },
    {
      '@type': 'ListItem',
      position: 13,
      name: 'BOOK AN APPOINTMENT',
      item: `${siteConfig.url}/book-an-appointment`,
    },
  ],
}

export const generateBlogSchemaOrg = (blogData: Blog): WithContext<BlogPosting> => {
  const plainTextContent = blogData.content_html?.replace(/<[^>]+>/g, '') || ''

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogData.meta?.title || blogData.name || 'Untitled Blog Post',
    name: blogData.name || 'Untitled Blog Post',
    description: blogData.excerpt || 'No description available',
    author: {
      '@type': 'Person',
      name: blogData['Author Name'] || 'Anonymous',
      url: siteConfig.url,
      description:
        'Nirvana Physiotherapy and Wellness Center is a holistic health facility in Kathmandu, Nepal, offering physiotherapy, osteopathy, chiropractic care, and Ayurvedic healing.',
    },
    datePublished: blogData.createdAt || new Date().toISOString(),
    dateModified: blogData.updatedAt || blogData.createdAt || new Date().toISOString(),
    url: blogData.slug ? `${siteConfig.url}/blog/${blogData.slug}` : siteConfig.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': blogData.slug ? `${siteConfig.url}/blog/${blogData.slug}` : siteConfig.url,
    },
    isPartOf: {
      '@type': 'Blog',
      name: siteConfig.name || 'Blog',
      url: `${siteConfig.url}/blog`,
    },
    image: {
      '@type': 'ImageObject',
      url: (blogData.featuredImage as Media)?.url || `${siteConfig.url}/default-image.jpg`,
      width: (blogData.featuredImage as Media)?.width?.toString() || '1200',
      height: (blogData.featuredImage as Media)?.height?.toString() || '630',
      caption: blogData.meta?.title || blogData.name || 'Blog Post Image',
      abstract: blogData.excerpt || blogData.meta?.description || undefined,
    },
    thumbnailUrl:
      (blogData.featuredImage as Media)?.url || `${siteConfig.url}/default-thumbnail.jpg`,
    articleBody: plainTextContent || blogData.content_html || '',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.jpg`,
        width: '300',
        height: '90',
      },
    },
    wordCount: plainTextContent ? plainTextContent.trim().split(/\s+/).length : undefined,

    articleSection: 'General',
    inLanguage: 'en',
  }
}
