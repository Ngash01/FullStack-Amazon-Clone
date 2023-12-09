import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { ProductFeed } from '@/components/ProductFeed'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      {/* Header goes here */}
      <div>
        {/* <Header/> */}
      </div>

        {/* Banner Component*/}
        <Banner/>
        
      <main className='max-w-screen-2xl mx-auto'>
        {/* ProductFeed */}
        <ProductFeed/>
      </main>
    </div>
  )
}



