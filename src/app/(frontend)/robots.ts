import { siteConfig } from '@/config/seo.config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
