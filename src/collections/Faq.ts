import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Faq: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
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
      name: 'question',
      type: 'text',
      required: true,
    },
    { name: 'answer', type: 'text', required: true },
  ],
}
