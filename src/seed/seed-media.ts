import { Media } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const rootDir = process.cwd() // <— FIX: Always project root

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import mediaData from './media-data.json' assert { type: 'json' }

const seedMedia = async () => {
  const payload = await getPayload({
    config: payloadConfig,
  })
  try {
    for (const media of mediaData) {
      try {
        const filePath = path.join(rootDir, 'seed-image', media.filename!)
        await payload.create({
          collection: 'media',
          data: media,
          filePath: filePath,
        })
      } catch (error) {
        console.error(`Error seeding media ID ${media.id}:`, error)
      }
    }
  } catch (error) {
    console.error(JSON.stringify(error))
    process.exit(1)
  }
}

export default seedMedia
