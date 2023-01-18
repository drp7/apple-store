import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {RiUserLine} from 'react-icons/ri'
import {HiOutlineShoppingBag} from 'react-icons/hi'

export default function Header() {
  const session=false
  return (
    <header className='flex items-center sticky top-0 z-20 w-full justify-between 
    bg-[#E7ECEE]
     p-2 px-4 md:p-4 ' >
      <div className='flex items-center justify-center md:w-1/5'>
      <Link href='/' >
        <div className='relative w-5 h-10 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image src='https://rb.gy/vsvv2o' fill className='object-contain'  alt={'logo'}  />
        </div>
        </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
          <a href="" className="header link">Product</a>
          <a href="" className="header link">Explore</a>
          <a href="" className="header link">Support</a>
          <a href="" className="header link">Business</a>
        </div>
<div className="md:w-1/5 flex items-baseline justify-center gap-2  ">
    
<BiSearch size={22} className="header"/>

<Link href={'/checkout'}>
<div className='relative cursor-pointer'>
<span className='absolute -right-1 -top-1 z-50 h-4 w-4 grid place-content-center rounded-full bg-gradient-to-r from-pink-400 text-xs to-violet-400 '>5</span>
<HiOutlineShoppingBag size={25} className='header'
/>

</div>
</Link>
{session?<div className='relative h-7 w-7'><Image src={
  // session.user?.image||
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}  alt={'user'} fill className='object-fill rounded-full ' /></div>:<RiUserLine className='h-6 w-6 header'/>
}
        </div>
   </header>
  )
}
