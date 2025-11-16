import { Footer } from '@/app/(frontend)/_components/layout/footer'
import Navbar from '@/app/(frontend)/_components/layout/navbar'
import { Metadata } from 'next'
import React from 'react'
import '../../global.css'
export const metadata: Metadata = {
  description: 'Buy Best Flooring materials for you house',
  title: 'Urban Earth',
  robots: {
    follow: true,
  },
  creator: ' Arksh Group',
  keywords: [
    'Buy Flooring goods in Nepal',
    'Textile company in Nepal',
    'Marbles',
    'Urban Earth Nepal',
    'Urban Earth Flooring and tiles ',
    'Marble Flooring in Nepal',
  ],
  alternates: {
    canonical: '',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
