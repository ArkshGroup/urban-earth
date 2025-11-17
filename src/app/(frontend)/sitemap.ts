import { marketingNavigationMenu, NavItem } from '@/config/marketing-routes.config'
import { siteConfig } from '@/config/seo.config'
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

const LAST_MODIFIED = new Date().toISOString().split('T')[0]
const PRIORITY = 0.8

function flattenNav(nav: NavItem[]): string[] {
  const urls: string[] = []
  for (const item of nav) {
    if (item.href.startsWith('http')) continue
    urls.push(item.href)
    if (item.subItems) {
      urls.push(...flattenNav(item.subItems))
    }
  }
  return urls
}

const staticSiteMap = Array.from(new Set(flattenNav(marketingNavigationMenu))).map((href) => ({
  url: `${siteConfig.url}${href}`,
  lastModified: LAST_MODIFIED,
  priority: href === '/' ? 1.0 : PRIORITY,
}))

export const revalidate = 0

const getBlogsFromPayload = async () => {
  const getConfig = await import('@/payload.config')
  const data = await getPayload({ config: getConfig.default })
  const blogs = await data.find({
    collection: 'blogs',
    limit: 1000,
    sort: '-publishedDate',
  })
  return blogs.docs.map((doc) => ({
    url: `${siteConfig.url}/blog/${doc.slug}`,
    lastModified: doc.updatedAt || LAST_MODIFIED,
    priority: 0.7,
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogsFromPayload()
  return [...staticSiteMap, ...blogs]
}
