import type { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    create: () => true,
    read: () => true,
  },

  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
  ],
}
