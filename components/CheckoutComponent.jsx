"use client"
import { addToCart, removeFromCart, } from '@/redux/slice'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CheckoutComponent = ({item}) => {
    const dispatch = useDispatch()

    const addItemToCart = ()=>{
        dispatch(addToCart(item))
    }

    const removeItemFromCart = ()=>{
        dispatch(removeFromCart(item))
    }

    const items = useSelector((state)=> state.cart.items)

  return (
    <div className='flex flex-col md:flex-row md:justify-between gap-3 items-center p-8 bg-slate-800'>
        <div className='flex items-center gap-1'>
            <Image src={item.image} width={200} height={200} objectFit="contain"/>
            <div className='flex flex-col gap-3 ml-5'>
                <p className='text-xl font-semibold'>{item.title}</p>
                <div className="flex text-yellow-500">
                    {[...Array(Math.floor((item.rating.rate)))].map((_, i)=> <Star key={i} fill="gold"/>)}
                </div>
                <p className='text-gray-500 whitespace-pre-wrap max-w-3xl'>{item.description}</p>
                <p>{item.price}</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-fit mt-2'>
            <button className='button' onClick={addItemToCart}>Add To Cart</button>
            <button className='button' onClick={removeItemFromCart}>Remove from Cart</button>
        </div>

        <hr className='bg-white'/>
        
    </div>
  )
}


