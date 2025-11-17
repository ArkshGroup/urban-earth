'use server'
import config from '@/payload.config'
import { getPayload } from 'payload'

export const addContactMutation = async ({
  data,
}: {
  data: {
    email: string
    message: string
    phone?: string
  }
}) => {
  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact',
      data: {
        email: data.email,
        message: data.message || '',
        phone: data.phone || '',
      },
    })

    // const res = await sendEmail({
    //   to: data.email,
    //   subject: 'Appointment Confirmation',
    //   reactComponent: ContactEmail({ contact: data }),
    // })
    // console.log('Email sent successfully:', res)
    return { success: true }
  } catch (error) {
    console.error('Error creating appointment:', error)
    throw error
  }
}
