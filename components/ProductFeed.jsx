
import ProductCard from "./ProductCard"

export const ProductFeed = async() => {

    const products =  await fetch("https://fakestoreapi.com/products").then(res=> res.json())
    

  return ( 
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:-mt-[15rem] mx-auto">
        {products.slice(0,4).map((product)=>{
            return (
              <ProductCard 
              key={product.id} 
              id={product.id} 
              title={product.title} 
              price={product.price} 
              description={product.description}
              image={product.image}
              rating={product.rating}
              category={product.category}/>
            )
        })}
        <img className="md:col-span-full w-full h-[370px] object-cover" src="https://i.pinimg.com/736x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg" alt="" />
        {products.slice(4,8).map((product)=>{
            return (
              <ProductCard 
              key={product.id} 
              id={product.id} 
              title={product.title} 
              price={product.price} 
              description={product.description}
              image={product.image}
              rating={product.rating}
              category={product.category}/>
            )
        })}
          <img className="md:col-span-2 w-full h-full object-cover" src="https://png.pngtree.com/template/20220319/ourmid/pngtree-digital-electronic-poster-banner-image_877671.jpg" alt="" />
          {products.slice(9,11).map((product)=>{
            return (
              <ProductCard 
              key={product.id} 
              id={product.id} 
              title={product.title} 
              price={product.price} 
              description={product.description}
              image={product.image}
              rating={product.rating}
              category={product.category}/>
            )
        })}
        {products.slice(12,19).map((product)=>{
            return (
              <ProductCard 
              key={product.id} 
              id={product.id} 
              title={product.title} 
              price={product.price} 
              description={product.description}
              image={product.image}
              rating={product.rating}
              category={product.category}/>
            )
        })}
    </div>
  )
}


