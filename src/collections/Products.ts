import formatSlug from '@/lib/helper/slug-generator'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/')
        revalidatePath(`/collections}`)
        revalidatePath(`/collections/${doc.slug}`)
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: false,
      unique: true,
      localized: true,
      hooks: {
        beforeValidate: [formatSlug('products')],
      },
      admin: {
        hidden: true,
      },
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
        admin: {
          hideInsertParagraphAtEnd: true,
        },
      }),
    },
    {
      name: 'priorityLevel',
      type: 'radio',

      options: [
        { label: 'High', value: '3' },
        { label: 'Medium', value: '2' },
        { label: 'Low', value: '1' },
      ],
      defaultValue: '1',
      required: true,
    },
    {
      name: 'featuredProduct',
      type: 'checkbox',
      required: false,
      defaultValue: false,
    },
    {
      name: 'isProductVisible',
      type: 'checkbox',
      required: false,
      defaultValue: true,
    },
    {
      name: 'thumbnailImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      required: false,
    },
    {
      name: 'cataloguePDF',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'metaTitle',
      type: 'text',
      required: false,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: false,
    },
    {
      name: 'metaKeywords',
      type: 'text',
      required: false,
    },
  ],
}
