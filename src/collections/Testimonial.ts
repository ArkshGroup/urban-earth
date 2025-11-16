import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const ClientTestimonials: CollectionConfig = {
  slug: 'clientTestimonials',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    { name: 'message', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'handle', type: 'text' },
  ],
}
