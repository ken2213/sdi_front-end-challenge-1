import React from 'react'
import { Button } from './ui/button'
import { CornerUpRight, TriangleRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className=' min-h-[400px] '>
        <div className='bg-orange-500 max-h-[500px] flex justify-center'>
          <img 
            src='./tmsph-ls-midafood.jpeg' 
            className='w-full object-cover'
          />
        </div>

        <div className='absolute z-10 h-[80px] w-[80px] top-[48%] ml-8 '>
          {/* Parallelogram */}
          <div className='skew-x-[-12] bg-toyota-red  w-full h-full'>
            <TriangleRight className='absolute bottom-1 right-1 text-white fill-white' size={15} />
          </div>

          <div className='absolute top-0 w-full h-full pt-2 text-white'>
            <div className=' flex justify-center items-center  w-full h-full'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[1.8rem] text-center leading-3 font-semibold'>13</h1>
                <p className='text-center text-[0.8rem]'>JAN</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex justify-end items-center h-[80px] pr-8'>
          <Button variant="ghost" className='font-bold'>
            <CornerUpRight /> &nbsp; SHARE
          </Button>
        </div>
    </section>
  )
}

export default Hero