import { AuroraText } from '@/components/animation/aural-text'
import { Globe } from '@/components/animation/globe'
import { Highlighter } from '@/components/animation/text-highlighter'
import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="  container mx-auto grid  pt-12 bg-white  grid-cols-1  md:grid-cols-2  ">
      {/* left part of the grid */}
      <div className="flex flex-col items-center justify-center ">
        <div className=" ">
          <h1 className=" text-6xl text-center md:text-start md:text-8xl  z-9 ">
            Urban
            <AuroraText>Earth</AuroraText>
          </h1>
          <div className="px-2">
            <p className="leading-relaxed text-xl text-center md:text-start md:text-2xl">
              <Highlighter padding={0} action="underline" color="#FF9800">
                Redefining the Floors of Urban Living
              </Highlighter>{' '}
              with timeless elegance and effortless style.
            </p>
          </div>
          <p className="px-1 text-center md:text-start text-lg  md:text-3xl font-thin"></p>
          <p className="px-1 text-sm text-center text-slate-600 md:text-start">
            Urban Earth blends modern design with everyday functionality to redefine the way you
            experience flooring. From sleek hardwoods to cozy carpets, our collections are made to
            complement contemporary living.
          </p>
        </div>
        {/* CTA section */}
        <div className=" mt-10 flex w-full  items-center md:justify-start justify-center  gap-6 ">
          <span className=" text-white">
            <RainbowButton className=" py-8 px-10"> Get Started </RainbowButton>
          </span>
          <Button className=" px-12 py-8 bg-primary">Learn modern</Button>
        </div>
      </div>

      {/* right part of grid  */}
      <div className="  justify-center items-center relative  w-full ms-auto">
        <Globe />
      </div>
    </div>
  )
}

export default HeroSection
