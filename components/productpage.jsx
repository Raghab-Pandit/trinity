"use client"
import axiosInstance from '@/axiosInstance/axiosInstance';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiImageOn } from 'react-icons/ci';
import { FaCartArrowDown, FaComment } from "react-icons/fa6";
import Reviews from './reviews';

const ProductPage = ({id}) => {

  console.log(id);

  const [reviewsTab, setReviewsTab]= useState(false);
  const [Product, setProduct]= useState();
  const [ImageNum, setImageNum]= useState(0);

  const fetchProducts = async () => {
  try{
    const res= await axiosInstance.get(`/products/${id}`);
    const data= await res.data;
    console.log(data);
   setProduct(data);
   console.log(Product)
  }catch(error){
    console.error("Error fetching products:", error);
  }
}

useEffect(() => {
  fetchProducts();
}, []);

  return (
      <>
    {reviewsTab && <Reviews visibility={reviewsTab} cut={setReviewsTab} Product={Product}/>}
        <div className='flex w-full h-full justify-center space-x-5 mt-6'>
            <div className='w-[40%] flex flex-col justify-between'>
                <div className="mt-2 flex items-center justify-center transition-300 transition-all">
                    {Product?.images[ImageNum] ? 
                    <Image
                        src={Product.images[ImageNum]}
                        alt="Product Image"
                        width={400}
                        height={90}
                        className='bg-product rounded-[30px]'
                    /> : <div className="h-full w-full flex items-center justify-center text-gray-400"><CiImageOn /></div>}
                </div>
                <div className="flex items-center justify-evenly px-3 my-3">
                    {
                        Product?.images.map((image, index)=>
                        (<div key={index} className={`h-30 w-30 border-4 rounded-sm transition-300 transition-all ${index === ImageNum ? "border-blue-300" : "border-white"} cursor-pointer`} onClick={()=> setImageNum(index)}>
                        {image ? 
                    <Image
                        src={image}
                        alt="Product Image"
                        width={400}
                        height={400}
                        className='bg-product'
                    /> : 
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                        <CiImageOn />
                    </div>}
                    </div>))
                    }
                </div>
            </div>
            <div className='w-[40%]'>
                <div className="h-[75%] flex flex-col space-y-6 py-5">
                    <div className="flex flex-col">
                        <div className="flex">
                            {Product?.tags.map((tag, index)=>(
                                <p key={index} className={`${index === Product?.tags.length-1 && Product?.tags.length!==1 ? "text-white" : "text-white/40"}`}>{tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()} 
                                {index !== Product?.tags.length-1 && " /"} &nbsp;</p>
                            ))}
                        </div>
                        <h1 className="font-bold text-white leading-8 text-center sm:text-left text-[25px]">
                            {Product?.title}
                        </h1>
                        <h2 className='font-bold leading-10 text-[25px]'>
                            {Product && '$' + Product?.price}
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-white'>
                            {Product?.description}
                        </p>
                    </div>
                    <div className="flex space-x-4 items-center justify-between mt-10">
                            <button className="border-2 border-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-500 transition-all cursor-pointer flex items-center">
                                Add to Cart <FaCartArrowDown className='ml-2' />
                            </button>
                            {/* <button className="border-2 border-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer hover:text-white transition-500 transition-all">
                                Buy Now
                            </button> */}
                            <button onClick={()=> setReviewsTab(!reviewsTab)} className="border-2 border-transparent hover:border-white px-6 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-transparent text-white transition-500 transition-all cursor-pointer flex items-center">
                                See Reviews <FaComment className='ml-2' />
                            </button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage