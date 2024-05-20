import React from 'react'
import { Button } from './ui/button'
import { CornerUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='bg-red-500 min-h-[400px] '>
        <div className='bg-orange-500 h-[450px]'>
        
        </div>
        <div className='absolute bg-yellow-500 z-50 h-[80px] w-[80px] top-[43%] ml-8'>
          <h1>13</h1>
          <p>JAN</p>
        </div>
        <div className='flex justify-end h-[80px]'>
          <Button>
            <CornerUpRight /> &nbsp; Share
          </Button>
        </div>
    </section>
  )
}

export default Hero