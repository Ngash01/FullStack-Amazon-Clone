
export const PriceFormater = (price)=>{
    return new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(price)
}


