import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({id, image, name, price}) => {
  return (
    <>
        <div className='h-100 w-60 lg:w-70 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
            <div className="h-[65%] overflow-hidden w-full border border-transparent rounded-t-[20px] bg-white flex items-end justify-center">
                {image ? 
                <Image
                    src={image}
                    alt="Product Image"
                    width={500}
                    height={90}
                /> : <div className="h-full w-full flex items-center justify-center text-gray-400">No Image Available</div>}
            </div>
            <div className="h-[35%] bg-[#1E2330] border border-transparent rounded-b-[20px] flex flex-col items-center">
                <div className="mt-2 mb-3 flex flex-col items-center justify-between h-full px-2">
                    <h1 className='text-white font-semibold text-lg mt-2'>{name ? `${name}` : "Product Name"}</h1>
                    <p className='text-[#94A3B8] text-sm'>{price ? `$${price}` : "$99.99"}</p>
                    <Link href={`/products/${id}`} className=' bg-[#702cdf] text-white px-4 py-1 rounded-full hover:bg-[#5a23b8] transition-colors duration-200 cursor-pointer'>Check it out</Link>
                </div>            
            </div>
        </div>
    </>
  )
}

export default Product