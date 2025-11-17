'use server'
import config from '@/payload.config'
import { getPayload } from 'payload'

export const incrementBlogView = async ({
  data,
}: {
  data: {
    blogSlug: string
  }
}) => {
  try {
    const payload = await getPayload({ config })
    const existingAppointment = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: data.blogSlug,
        },
      },
    })
    if (existingAppointment.totalDocs === 0) {
      throw new Error('Blog not found')
    }

    const currentView = existingAppointment.docs[0].views
    const updatedViews = (currentView || 0) + 1

    await payload.update({
      collection: 'blogs',
      where: {
        id: {
          equals: existingAppointment.docs[0].id,
        },
      },
      data: {
        views: updatedViews,
      },
    })
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    }
  }
}
