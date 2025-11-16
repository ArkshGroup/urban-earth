import BrowserProductSection from '@/app/(frontend)/_components/landing/browse-products-section'
import { CTASection } from '@/app/(frontend)/_components/landing/cta-section'
import HeroSection from '@/app/(frontend)/_components/landing/hero-section'
import { Testimonials } from '@/app/(frontend)/_components/landing/testimonial'
import React from 'react'
import ExploreOurBlogsSection from '../_components/landing/explore-our-blogs'
import FAQ1 from '../_components/landing/faq-container'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const RootHomePage = async () => {
  const [{ docs: faqs }, { docs: testimonials }] = await Promise.all([
    (await getPayload({ config: payloadConfig })).find({
      collection: 'faq',
    }),
    (await getPayload({ config: payloadConfig })).find({
      collection: 'clientTestimonials',
    }),
  ])

  return (
    <>
      <HeroSection />
      <BrowserProductSection />
      <FAQ1 faqs={faqs} />
      <Testimonials testimonials={testimonials} />
      <ExploreOurBlogsSection />
      <CTASection />
    </>
  )
}

export default RootHomePage
