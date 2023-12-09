"use client"
import { PriceFormater } from "@/priceFormater";
import { addToCart } from "@/redux/slice";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({id, title, price, description, image, rating, category}) => {
    const dispatch = useDispatch()
    
    const addItemToBasket = ()=>{
      const product = {
        id, title, price, description, image, rating, category
      }
      dispatch(addToCart(product))
    }

  return (
    <div className="flex flex-col m-3 bg-slate-800 z-30 p-10 relative gap-3">
        <p className="absolute top-2 right-2 text-xs ">{category}</p>

        <div className="w-full h-[200px] relative">
          <Image src={image} fill objectFit="contain" alt="" className="mx-auto" />
        </div>

        <h4 className="fonst-semibold line-clamp-2">{title}</h4>
        <div className="flex text-yellow-500">
            {[...Array(Math.floor((rating.rate)))].map((_, i)=> <Star key={i} fill="gold"/>)}
        </div>
        <p className="text-sm line-clamp-2">{description}</p>

        <div>{PriceFormater(price)}</div>

        <button onClick={addItemToBasket} className="button mt-auto" >Add to basket</button>
    </div>
  )
}

export default ProductCard;

