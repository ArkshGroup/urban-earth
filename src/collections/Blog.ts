import {
  DefaultNodeTypes,
  FixedToolbarFeature,
  lexicalEditor,
  lexicalHTMLField,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { HTMLConvertersFunction } from '@payloadcms/richtext-lexical/html'
import formatSlug from '@/lib/helper/slug-generator'
import { revalidatePath } from 'next/cache'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/blog')
        revalidatePath(`/blog/${doc.slug}`)
      },
    ],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: false,
      unique: true,
      localized: true,
      hooks: {
        beforeValidate: [formatSlug('blogs')],
      },
      admin: {
        hidden: true,
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      required: true,
      admin: {
        description: 'A short summary of the blog post.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
        admin: {
          hideInsertParagraphAtEnd: true,
        },
      }),
    },
    lexicalHTMLField({
      htmlFieldName: 'content_html', // this is what you want to name your new field
      lexicalFieldName: 'content', // the name of the field we're converting
      hidden: true, // if you want the field to be hidden in the admin UI, false by default
      storeInDB: false, // you can choose whether you want the HTML stored in your database, this is
      //@ts-expect-error
      converters: (({ defaultConverters }) => ({
        ...defaultConverters,
      })) as HTMLConvertersFunction<DefaultNodeTypes>,
    }),

    {
      name: 'Author Name',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    { name: 'featuredImage', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'readTime',
      type: 'text',
      required: true,
    },
    {
      name: 'views',
      type: 'number',
      required: false,
      defaultValue: 0,
      admin: {
        description: 'Number of views for the blog post',
        hidden: true,
      },
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title (SEO) Length should be between 50-60 characters',
          admin: {
            components: {},
          },
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
          label: 'Meta Description (SEO) Length should be between 70-155 characters',
        },
        {
          name: 'keywords',
          type: 'text',
          localized: true,
          label: 'Meta Keywords (SEO) ',
        },
      ],
    },
  ],
}
