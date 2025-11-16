import { Media, Product } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload, PaginatedDocs } from 'payload'

export async function getProductForShowcase() {
  const { docs }: PaginatedDocs<Product> = await (
    await getPayload({ config: payloadConfig })
  ).find({
    collection: 'products',
    limit: 1000,
    where: {
      isProductVisible: {
        equals: true,
      },
    },
    sort: '-priorityLevel',
    depth: 1,
  })

  type IProductShowcase = Array<{
    id: number
    name: string
    description: string
    slug: string
    image: string
    featured: boolean
  }>

  const sortedDocs = docs.sort((a, b) => {
    const priorityA = parseInt(a.priorityLevel, 10)
    const priorityB = parseInt(b.priorityLevel, 10)
    return priorityB - priorityA
  })

  const sanitizedDocs: IProductShowcase = sortedDocs.map((doc) => ({
    id: doc.id,
    name: doc.name,
    slug: doc.slug!,
    description: doc.shortDescription,
    image: doc.thumbnailImage ? ((doc.thumbnailImage as Media).url as string) : '',
    featured: doc.featuredProduct || false,
  }))

  const featuredCollections = sanitizedDocs.filter((c) => c.featured)
  const otherCollections = sanitizedDocs.filter((c) => !c.featured)

  return { featuredCollections, otherCollections }
}
