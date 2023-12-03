"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, 
    // pauseOnHover: true
  }

   const assets = [
    {value:0, image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30db5277630559.5c8d3005a8572.png"},
    {value:1, image:"https://marketplace.canva.com/EAEkRcBTNyQ/1/0/1600w/canva-brown-winter-fashion-new-collection-landscape-banner-budVAEBfxW4.jpg"},
    {value:2, image: "https://i.pinimg.com/736x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg"},
    {value:3, image:"https://png.pngtree.com/template/20220319/ourmid/pngtree-digital-electronic-poster-banner-image_877671.jpg"}
   ]

  return (
    <div className="w-full h-full px-10">
      <h2 className='bg-blue-300 text-center'>Welcome to The Biggest Sale of the year! 🎉</h2>
      <Slider {...settings}>
       {assets.map((asset)=>{
          return (
            <div key={asset.value}>
              <img src={asset.image}  alt="" className="md:h-[450px] lg:h-[600px]  object-cover w-full"/>
            </div>
          )
       })}
      </Slider>
      <div className="h-[40px] -mb-5  bg-gradient-to-b from-slate-300 to-slate-700"/>
    </div>
  )
}



