"use client"
import { CheckoutComponent } from '@/components/CheckoutComponent';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const items = useSelector((state)=>state.cart.items)
  const getPrice = useSelector((state)=>state.cart.items)
  console.log("items", items)

  let totalPrice = 0;

  for(let i = 0; i <getPrice.length; i++){
    totalPrice += getPrice[i].price;
  }

  console.log("total price", totalPrice)


  return (
    <div className='p-8 max-w-screen-2xl mx-auto'>
        <div className='pb-10 border border-gray-500 space-y-5 bg-gray-800/20'>
            <Image
            src={"/Shop-Till-You-Drop.jpg"} alt='checkout'
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "100%", height:"30rem", objectFit:"cover" , objectPosition:"center "}}
            />
            <div className='text-2xl pl-3'>
              {items.length > 0 ? (
                <p>Your shopping basket</p>
              ): (
                <p>Your basket is empty</p>
              )}
            </div>
            <div>
              <div className='space-y-3'>
                {items.map((item)=>{
                    return(
                      <CheckoutComponent item={item} key={item.id}/>
                    )
                })}
              </div>
              <div className='mt-6 bg-slate-500 max-w-lg ml-auto p-5 m-3 shadow-md'>
                <p>All Items: {items.length}</p>
                <div className='flex items center gap-3'>
                  <p>Subtotal: </p>
                  <p className='text-lg font-semibold'>${totalPrice}</p> 
                </div>
                <button className='button'>Proceed to checkout</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage;

