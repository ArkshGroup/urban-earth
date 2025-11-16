'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20  bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl  mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg   ">
              Explore our complete collection and find the perfect flooring solution for your home
              or business. Get expert advice and premium quality guaranteed.
            </p>
          </div>
          <Link href={'/collections'}>
            <Button size="lg" className="gap-2  group whitespace-nowrap">
              Browse Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-4 duration-500  ease-in-out" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
