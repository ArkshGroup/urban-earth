import path from 'path'
import { fileURLToPath } from 'url'
import { Product } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const __filename = fileURLToPath(import.meta.url)
import products from './product.json' assert { type: 'json' }

export const seedProduct = async () => {
  for (const product of products as Product[]) {
    try {
      const payload = await getPayload({
        config: payloadConfig,
      })
      await payload.create({
        collection: 'products',
        data: product,
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log('✅ Done seeding products!')
}
