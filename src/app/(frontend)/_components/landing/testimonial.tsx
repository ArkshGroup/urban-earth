'use client'

import AutoScroll from 'embla-carousel-auto-scroll'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GridBackgroundDemo } from '@/components/animation/grid-background'
import { AuroraText } from '@/components/animation/aural-text'
import { ClientTestimonial, Media } from '@/payload-types'
import { Card } from '@/components/ui/card'

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ name, message, image, handle }: ClientTestimonial) {
  return (
    <Card
      className={cn(
        'flex flex-col text-black  bg-white  border-primary rounded-lg border-t',
        ' from-muted/50 to-muted/10',
        'p-4 text-start sm:p-6',
        'hover:from-muted/60 hover:to-muted/20',
        'max-w-[320px] sm:max-w-[320px]',
        'transition-colors duration-300',
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          {image && <AvatarImage src={(image as Media).url!} alt={name} />}
          <AvatarFallback className=" bg-primary">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">{name}</h3>
          <p className="text-sm ">{handle}</p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm ">{message}</p>
    </Card>
  )
}
const Testimonials = ({ testimonials }: { testimonials: ClientTestimonial[] }) => {
  return (
    <section className=" relative py-16 ">
      <h2 className=" text-center  text-6xl">
        Our Valuable
        <AuroraText>Customers</AuroraText>
      </h2>
      <p className="text-center  text-lg mt-4 mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
        We are proud to serve a diverse and growing clientele. Their trust in our products and
        services is a testament to the quality and commitment we uphold. Read what they have to say
        about their experience below.
      </p>
      <div className="relative flex items-center justify-center  bg-primary/10 md:pt-16 lg:pt-20">
        <GridBackgroundDemo />
        <Carousel
          className="  py-12 w-full"
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true })]}
        >
          <CarouselContent className="ml-0 ">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="flex  w-full  justify-center pl-0 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Testimonials }
