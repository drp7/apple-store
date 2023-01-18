import Image from 'next/image'
import React from 'react'
import Button from './Button'


export default function Landing() {
  return (
    <section className=' sticky top-20 mx-auto flex h-screen max-w-[1350px] items-center justify-between text-zinc-500 md:text-inherit
    px-8'>
      <div className='space-y-8 relative '>
     
        <h1 className='leading-10 font-semibold tracking-wide text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>
          <span className='block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text'>
            Powered
          </span>
          <span className='block'>
           By Intellect
          </span>
          <span className='block '>
           Driven By Values
          </span>
        </h1>
       <div className='space-x-8'>
          <Button title='Buy Now'/>
          <a href='' onClick={e=>e.preventDefault()} className="link">Learn More</a>
      </div>
      </div>
      <div className='absolute inset-0  -z-40 md:w-1/2 md:h-4/5   md:block md:relative '>
        <Image src="/iphone.png" fill className='object-cover md:object-contain ' alt={'iphone'}/>
      </div>
    </section>
  )
}
