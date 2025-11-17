import path from 'path'
import { fileURLToPath } from 'url'
import { Product } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const seedProduct = async () => {
  const products: Product[] = [
    {
      id: 20,
      name: 'Cushion Mats',
      slug: 'cushion-mats',
      shortDescription: 'Comfortable, safe, versatile floor mats.',
      description: {
        root: {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Cushion Mats',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' are ergonomically designed flooring solutions that provide ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'comfort, support, and safety',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' for both residential and commercial environments. Ideal for areas where prolonged standing is required—such as kitchens, workstations, gyms, and workshops—these mats reduce fatigue, improve posture, and protect joints.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: null,
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Made from ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'high-quality, durable materials',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ', Cushion Mats feature a ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'soft yet supportive surface',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' that absorbs impact while remaining stable underfoot. Their ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'anti-slip backing',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' ensures safety on various floor types, and the mats are easy to clean and maintain. Available in a variety of sizes and patterns, Cushion Mats blend practicality with modern aesthetics to enhance both comfort and interior appeal.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: null,
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },
            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Key Features',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: null,
              format: '',
              indent: 0,
              type: 'heading',
              version: 1,
              tag: 'h3',
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Soft, ergonomic surface for comfort and support',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Reduces fatigue and protects joints during prolonged standing',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Anti-slip backing for safety on all floor types',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Durable, long-lasting material for heavy use',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Easy to clean and maintain',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Suitable for residential, commercial, and industrial spaces',
                  type: 'text',
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '• Available in multiple sizes, colors, and patterns',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: null,
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
      priorityLevel: '1',
      featuredProduct: false,
      isProductVisible: true,
      thumbnailImage: {
        id: 22,
        alt: 'Artboard-1-400x400.png',
        updatedAt: '2025-11-14T11:47:50.687Z',
        createdAt: '2025-11-14T11:47:50.687Z',
        url: '/api/media/file/PVC-Cushion-Mat.png',
        thumbnailURL: null,
        filename: 'PVC-Cushion-Mat.png',
        mimeType: 'image/png',
        filesize: 538968,
        width: 450,
        height: 450,
        focalX: 50,
        focalY: 50,
      },
      images: [
        {
          id: '6919737c729cc5344ce4e4ba',
          image: {
            id: 34,
            alt: 'Artboard-1-400x400.png',
            updatedAt: '2025-11-14T11:48:09.209Z',
            createdAt: '2025-11-14T11:48:09.209Z',
            url: '/api/media/file/blue-pvc-cushion-mat.png',
            thumbnailURL: null,
            filename: 'blue-pvc-cushion-mat.png',
            mimeType: 'image/png',
            filesize: 2152052,
            width: 1236,
            height: 1000,
            focalX: 50,
            focalY: 50,
          },
        },
      ],
      cataloguePDF: null,
      metaTitle: 'Cushion Mat – Comfortable, Anti-Slip Mats for Workstations & Homes',
      metaDescription:
        'Cushion Mats provide ergonomic comfort, anti-slip safety, and long-lasting durability. Perfect for kitchens, offices, gyms, workshops, and high-traffic areas. Available in various sizes and colors.',
      metaKeywords:
        'cushion mat, anti-fatigue mat, ergonomic floor mat, anti-slip mat, comfort mat, durable workstation mat, kitchen cushion mat, office floor mat, gym floor mat, industrial anti-fatigue mat, cushioned standing mat',
      updatedAt: '2025-11-16T06:47:35.242Z',
      createdAt: '2025-11-16T06:47:10.093Z',
    },
  ]

  for (const product of products) {
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
