'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutUs() {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-6xl  text-gray-900 mb-4">About Urban Earth</h1>
        <p className="text-gray-600 text-lg">
          Urban Earth is Nepal’s trusted provider of premium flooring, tiles, and carpets—designed
          to bring durability, elegance, and value to every space.
        </p>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <Card className="overflow-hidden rounded-2xl shadow-none">
          <CardContent className="p-0">
            <Image
              src="/luxury-flooring-tiles-and-carpets-showcase.jpg"
              alt="Urban Earth Showroom"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </CardContent>
        </Card>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl  text-gray-900 mb-4">Crafting Beautiful Spaces Since Day One</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Urban Earth, we focus on delivering high-quality flooring solutions—from luxurious
            carpets to durable tiles and modern vinyl flooring. Our goal is simple: provide products
            that elevate the comfort, beauty, and value of your space.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            With a curated selection of designs and materials, our showroom displays only the finest
            products sourced from trusted local and international manufacturers. Whether you’re
            building a home, renovating an office, or upgrading your interiors, we help you make the
            right choice.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We take pride in offering expert guidance, transparent pricing, and a customer-first
            approach—making Urban Earth your go-to destination for modern, stylish, and reliable
            flooring solutions in Nepal.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="rounded-2xl shadow-none">
          <CardContent className="p-8">
            <h3 className="text-2xl  mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide Nepal with durable, beautiful, and affordable flooring products while
              delivering exceptional customer service and a personalized shopping experience.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-none">
          <CardContent className="p-8">
            <h3 className="text-2xl  mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become Nepal’s most trusted and innovative flooring brand, inspiring better
              interior design through quality and style.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
