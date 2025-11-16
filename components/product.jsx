import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Product = ({id, image, name, price}) => {
  return (
    <>
        <Link href={`/products/${id}`} className='group h-65 sm:h-100 w-45 lg:w-60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
            <div className="h-[75%] overflow-hidden w-full border border-transparent rounded-t-[20px] bg-white/80 group-hover:bg-white transition-all duration-300 flex items-end justify-center">
                {image ? 
                <Image
                    src={image}
                    alt="Product Image"
                    width={500}
                    height={90}
                /> : <div className="h-full w-full flex items-center justify-center text-gray-400">No Image Available</div>}
            </div>
            <div className="h-[20%] bg-[#1E2330] border border-transparent flex flex-col items-center">
                <div className="mt-2 mb-3 flex flex-col items-center justify-between h-full px-2">
                    <h1 className='text-white font-semibold text-md sm:mt-2'>{name ? `${name}` : "Product Name"}</h1>
                    <p className='text-[#94A3B8] text-sm'>{price ? `$${price}` : "$99.99"}</p>
                </div>            
            </div>
            <div className="flex items-center justify-end w-full bg-[#1E2330] border border-transparent rounded-b-[20px]">
                <button className='bg-transparent border-1 border-transparent px-4 py-1 rounded-full text-[#5a24c9]/70 hover:text-[#5a24c9] hover:bg-[#5a23b8]/40 transition-colors duration-300 cursor-pointer'>
                    <FaArrowUpRightFromSquare />
                </button>
            </div>
        </Link>
    </>
  )
}

export default Product