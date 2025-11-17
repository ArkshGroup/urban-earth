import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'
import * as React from 'react'

interface IContactEmailProps {
  email: string
  message: string
  phone?: string
}

export default function ContactEmail({ contact }: { contact: IContactEmailProps }) {
  const demoContact: IContactEmailProps = {
    email: 'john.doe@example.com',
    message: 'Looking forward to our meeting.',
    phone: '123-456-7890',
  }

  const data = contact ?? demoContact

  return (
    <Html>
      <Head />
      <Preview>New Contact </Preview>
      <Tailwind>
        <Body className="bg-slate-100 font-sans">
          <Container className="max-w-[600px] mx-auto my-10 bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
            {/* Header */}
            {/* Contact Details */}
            <Section className="bg-slate-50 rounded-md p-6 mb-8">
              <Text className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">
                Contact Details
              </Text>
              <Text className="text-base text-slate-700 mb-2">
                <strong>Email:</strong> {data.email}
              </Text>
              {data.message && (
                <Text className="text-base text-slate-700">
                  <strong>Message:</strong> {data.message}
                </Text>
              )}
              <Text className="text-base text-slate-700">
                <strong>Created At:</strong> {new Date().toLocaleDateString()}{' '}
                {new Date().toLocaleTimeString()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
