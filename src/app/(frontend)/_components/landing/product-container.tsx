'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProductContainerProps {
  id: number
  name: string
  slug: string
  description: string
  image: string
  index: number
}

const ProductContainer = ({ description, id, image, name, slug, index }: ProductContainerProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/collections/${slug}`} className="overflow-hidden" key={index}>
      <motion.div
        key={id}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.01 }}
        viewport={{ once: true }}
        className="group cursor-pointer overflow-hidden"
      >
        <div
          className="w-full h-96 overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'none' }}
          >
            <motion.div
              className="text-white w-full"
              initial={{ y: 100 }}
              animate={{ y: isHovered ? 0 : 100 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <p className="text-white/80">{description}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductContainer
