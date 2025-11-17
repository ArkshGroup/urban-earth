import { Media, Product } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload, PaginatedDocs } from 'payload'

export async function getProductDetails(slug: string) {
  const { docs }: PaginatedDocs<Product> = await (
    await getPayload({ config: payloadConfig })
  ).find({
    collection: 'products',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
      isProductVisible: {
        equals: true,
      },
    },
    sort: '-priorityLevel',
    depth: 1,
  })

  if (docs.length === 0) {
    return null
  }

  const product = docs[0]
  type IProductShowcase = {
    id: number
    name: string
    description: any
    shortDescription: string
    slug: string
    thumbnailImage: string
    images?: string[]
    cataloguePDF?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
  }

  const productDetails: IProductShowcase = {
    id: product.id,
    name: product.name,
    slug: product.slug!,
    shortDescription: product.shortDescription,
    description: product.description,
    thumbnailImage: product.thumbnailImage ? ((product.thumbnailImage as Media).url as string) : '',
    images:
      product.images?.map((img) => (img.image ? ((img.image as Media).url as string) : '')) || [],
    cataloguePDF: product.cataloguePDF ? ((product.cataloguePDF as Media).url as string) : '',
    metaTitle: product.metaTitle || '',
    metaDescription: product.metaDescription || '',
    metaKeywords: product.metaKeywords || '',
  }

  return { productDetails }
}
