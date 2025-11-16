import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Gallery: GlobalConfig = {
  slug: 'gallery',
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/gallery')
      },
    ],
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Select an image for the gallery.',
          },
        },
      ],
    },
  ],
}
