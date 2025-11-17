import { render } from '@react-email/components'
import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST as string
const SMTP_PORT = parseInt(process.env.SMTP_PORT as string, 10)
const SMTP_USER = process.env.SMTP_USER as string
const SMTP_PASS = process.env.SMTP_PASS as string

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  debug: true,
  logger: true,
})

type SendEmailOptions = {
  to: string
  subject: string
  reactComponent: React.ReactElement
}

export async function sendEmail({ subject, reactComponent }: SendEmailOptions) {
  try {
    await transporter.verify()

    const html = await render(reactComponent)

    const mailOptions = {
      from: `"Urban Earth " <${SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      html,
    }

    return await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
