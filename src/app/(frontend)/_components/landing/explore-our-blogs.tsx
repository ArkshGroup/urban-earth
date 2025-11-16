import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { Media } from '@/payload-types'
import { AuroraText } from '@/components/animation/aural-text'
const ExploreOurBlogsSection = async () => {
  const payload = await getPayload({ config })
  const blogs = await payload.find({
    collection: 'blogs',
    limit: 3,
    sort: '-publishedDate',
  })
  const { docs } = blogs

  return (
    <section className="py-12">
      <div className=" mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-center  text-6xl">
          Explore Our
          <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="text-center  text-lg mt-4 mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Discover the latest tips, trends, and insights on flooring, rugs, mats, and home décor in
          Nepal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <Card
              key={doc.id}
              className="p-6 shadow-none border-none bg-primary/10 group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-5/3 relative rounded-t-xl overflow-hidden">
                <Image
                  alt={(doc.featuredImage as Media).alt}
                  src={(doc.featuredImage as Media).url!}
                  title={doc.name}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{doc.name}</h3>
              <p className="text-gray-700 text-justify mb-4 line-clamp-4">
                {doc.excerpt || 'A brief description of the blog post.'}
              </p>
              <Link
                href={`/blog/${doc.slug}`}
                className="text-primary line-clamp-1 hover:underline font-medium"
              >
                Read More : {doc.name}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ExploreOurBlogsSection
