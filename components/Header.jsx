import { Locate, MapPin, MenuIcon, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div>
      <main>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-3 flex-grow gap-3'>
          <div className='mt-2 flex items-center flex-grow md:flex-grow-0'>
            <Image src={"https://links.papareact.com/f90"} alt='' width={120} height={40} objectFit='contain' 
            className='cursor-pointer'/>
          </div>

          <div>
            <p className='text-sm text-slate-300 font-semibold mx-7 cursor-pointer'>Deliver to Amos</p>
            <div className='flex gap-1 ml-6 mr-2'>
              <MapPin/>
              <p className='font-bold'>Nairobi 00-100</p>
            </div>
          </div>

          {/* Search-Bar */}
          <div className='mb-2 hidden sm:flex bg-yellow-400 h-10 text-black hover:bg-yellow-500 flex-grow rounded-md'>
            <input type="text" className='h-full flex-grow w-full rounded-l-md p-2 focus:outline-none' placeholder='Search anything on Amazon'/>
            <Search className='h-8 cursor-pointer ml-2 mr-2 mt-1'/>
          </div>
           
           {/* Right */}
           <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap relative'>
            <div className='link'>
              <p>Hello Amos Kimani</p>
              <p className='font-bold md:text-sm'>Accounts and Lists</p>
            </div>

            <div className='link'>
              <p>Returns</p>
              <p className='font-bold md:text-sm'>& Orders</p>
            </div>
            <div className='link flex gap-1 items-center'>
              <ShoppingCart className='h-10'/>
              <p className='font-bold md:text-sm hidden md:block'>Basket</p>
              <p className='absolute right-0 -mr-2 -mt-3 bg-yellow-300 pl-1 pr-1 rounded-full text-black md:right-12 md:top-2'>0</p>
            </div>
           </div>


        </div>
        {/* Bottom Nav */}
        <div className='flex items-center bg-amazon_blue-light text-white space-x-3 p-3'>
            <p className='flex link items-center'>
              <MenuIcon className='h-6 mr-1'/>
              All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Todays Deals</p>
            <p className='link hidden md:block'>Electronics</p>
            <p className='link hidden md:block'>Buy Again</p>
            <p className='link hidden lg:block'>Shopper Toolkit</p>
            <p className='link hidden lg:block'>Health & Personal Care</p>
        </div>
        <div>
        </div>
      </main>
    </div>

  )
}

