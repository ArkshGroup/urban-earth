'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'
import ProductContainer from './product-container'

const ProductShowCaseContainer = ({
  featuredCollections,
  otherCollections,
}: {
  featuredCollections: Array<{
    id: number
    name: string
    description: string
    image: string
    slug: string
    featured: boolean
  }>
  otherCollections: Array<{
    id: number
    name: string
    description: string
    image: string
    slug: string

    featured: boolean
  }>
}) => {
  return (
    <section id="collections" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-4 text-balance">
            Discover Timeless Designs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our diverse range of curated products designed to elevate your space with style
            and functionality.
          </p>
        </motion.div>

        {/* Featured Collection - Large */}
        {featuredCollections.map((featuredCollection, key) => {
          const isEven = key % 2 === 0
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 rounded-xl overflow-hidden"
            >
              <div
                className={cn(
                  'grid grid-cols-1 md:grid-cols-2 gap-0',
                  !isEven && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
                )}
              >
                {/* Image */}
                <div className="relative h-96 md:h-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={featuredCollection.image}
                    alt={featuredCollection.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="bg-card flex flex-col justify-center p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">
                      Featured
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {featuredCollection.name}
                    </h3>
                    <p className="text-foreground/70 text-lg">{featuredCollection.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold flex items-center gap-2 mt-6"
                    >
                      View Product
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Other Collections - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-8">
          {otherCollections.map((collection, index) => (
            <ProductContainer key={collection.id} {...collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowCaseContainer
