"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='w-3/4 mx-auto'>
      <div className='mt-20 flex flex-col'>
      <Slider {...settings} className=''>
        {data.map((house)=>{
          return (
          <div key={house.name}  className='bg-white h-[450px] text-black flex flex-col  rounded-md w-[60rem] '>
            <div className=''>
              <img src={house.img} alt="" className='object-cover h-[20rem] w-full' />
            </div>

            <div className='p-3 overflow-y-scroll scrollbar-thin1 scrollbar-thin2'>
              <p className='text-lg font-bold text-center '>{house.name}</p>
              <p className='text-slate-600 text-sm '>{house.review}</p>
            </div>
          </div>
          )
        })}
          </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    name: "Ultra Modern",
    img: "/Ultra Modern/ultra modern 3.jpg",
    review: "Its strategically planned multi-tiered layout includes 8 bedrooms, 11 bathrooms, and spans 9400sf with a 4-car air-conditioned garage"
  },
  {
    name: "Luxury Villa",
    img: "/Ultra Modern/ultra modern 4.jpg",
    review: "eveloped by the acclaimed Metro Capital Builders, the house radiates unparalleled design precision and functionality. Its strategically planned multi-tiered layout includes 8 bedrooms, 11 bathrooms, and spans 9400sf with a 4-car air-conditioned garage"
  },
  {
    name: "New Modern Mansion",
    img: "/Ultra Modern/ultra modern 5.png",
    review: "eveloped by the acclaimed Metro Capital Builders, the house radiates unparalleled design precision and functionality. Its strategically planned multi-tiered layout includes 8 bedrooms, 11 bathrooms, and spans 9400sf with a 4-car air-conditioned garage"
  },
  {
    name: "Ultra Modern",
    img: "/Ultra Modern/ultra modern 7.jpg",
    review: "Its strategically planned multi-tiered layout includes 8 bedrooms, 11 bathrooms, and spans 9400sf with a 4-car air-conditioned garage"
  },
  {
    name: "kitchen make",
    img: "/Ultra Modern/Interior2.jpg",
    review: "ethe house radiates unparalleled design precision and functionality. Its strategically planned multi-tiered layout includes 8 bedrooms, 11 bathrooms, and spans 9400sf with a 4-car air-conditioned garage"
  }
]

export default Reviews;

