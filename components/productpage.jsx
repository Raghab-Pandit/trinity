"use client"
import axiosInstance from '@/axiosInstance/axiosInstance';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiImageOn } from 'react-icons/ci';
import { FaCartArrowDown, FaComment } from "react-icons/fa6";
import Reviews from './reviews';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQuantity, removeFromCart } from '@/Redux/Slices/cartSlice';

const ProductPage = ({id}) => {

  const [reviewsTab, setReviewsTab]= useState(false);
  const [Product, setProduct]= useState();
  const [ImageNum, setImageNum]= useState(0);
  const [itemInCart, setItemInCart]= useState(false);
  const [prodQuantity, setProdQuantity]= useState(1);
  const [changeInQuantity, setChangeInQuantity]= useState(false);

  const date= (new Date()).toISOString().split('T')[0];

  const cart= useSelector((state)=> state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
      setItemInCart(cart.map((c)=> c.id).includes(id))
  }, [cart, id]);

  useEffect(() => {
      if(itemInCart){
          const cartItem= cart.find((c)=> c.id === id);
          setProdQuantity(cartItem.quantity);
      } 
  }, [itemInCart, cart, id]);

  const fetchProducts = async () => {
    try{
      const res= await axiosInstance.get(`/products/${id}`);
      const data= await res.data;
      setProduct(data);
    }catch(error){
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => { fetchProducts(); }, []);

  const changeQuantityFunc= () => {
      if(cart.map((c)=> c.id).includes(id)){
          dispatch(changeQuantity({id: id, quantity: prodQuantity}));
      }
  }

  const addItemToCart= () => {
      dispatch(addToCart({id: id , date: date, product: Product, quantity: prodQuantity}));
      setChangeInQuantity(false);
  }

  return (
    <>
      {reviewsTab && <Reviews visibility={reviewsTab} cut={setReviewsTab} Product={Product}/>}

      <div className='flex flex-col sm:flex-row w-full h-full justify-center sm:space-x-5 mt-6 space-y-6 sm:space-y-0 px-3'>

        {/* LEFT SIDE IMAGES */}
        <div className='w-full sm:w-[40%] flex flex-col items-center'>

          <div className="mt-2 flex items-center justify-center w-full">
            {Product?.images[ImageNum] ? 
            <Image
              src={Product.images[ImageNum]}
              alt="Product Image"
              width={400}
              height={90}
              className='bg-product rounded-[30px] w-full h-auto'
            /> 
            : 
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              <CiImageOn />
            </div>}
          </div>

          {/* Thumbnails */}
          <div className="hidden sm:flex sm:justify-evenly sm:flex-wrap overflow-x-auto gap-3 my-3 w-full py-2">
            {Product?.images.map((image, index)=>(
              <div 
                key={index} 
                className={`min-w-[70px] min-h-[70px] border-4 rounded-sm ${index === ImageNum ? "border-blue-300" : "border-white"} cursor-pointer`}
                onClick={()=> setImageNum(index)}
              >
                {image ? 
                <Image
                  src={image}
                  alt="Product Image"
                  width={400}
                  height={400}
                  className='bg-product w-full h-auto'
                /> 
                : 
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                    <CiImageOn />
                </div>}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className='w-full sm:w-[40%]'>
          <div className="flex flex-col space-y-6 py-5">

            {/* Tags + Title */}
            <div className="flex flex-col text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start">
                {Product?.tags.map((tag, index)=>(
                  <p key={index} className={`${index === Product?.tags.length-1 && Product?.tags.length!==1 ? "text-white" : "text-white/40"} text-sm`}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()} 
                    {index !== Product?.tags.length-1 && " /"} &nbsp;
                  </p>
                ))}
              </div>

              <h1 className="font-bold text-white leading-8 text-[22px] sm:text-[25px]">
                {Product?.title}
              </h1>

              <h2 className='font-bold leading-10 text-[22px] sm:text-[25px]'>
                {Product && '$' + Product?.price}
              </h2>
            </div>

            {/* Description */}
            <p className='text-white text-center sm:text-left'>
              {Product?.description}
            </p>

            {/* Input + Add to Cart + Reviews */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-between mt-10 space-y-4 sm:space-y-0">

              <div className='flex w-full sm:w-auto'>
                <input 
                  type="number" 
                  onChange={(e)=>{setProdQuantity(e.target.value); setChangeInQuantity(true);}} 
                  value={prodQuantity} 
                  min="1" max='10' 
                  className="border-2 border-blue-600 outline-none bg-white/10 text-white p-2 rounded-l-lg font-semibold w-full sm:w-24"
                />
                <button 
                  onClick={() => !itemInCart && addItemToCart()} 
                  className={`border-2 border-blue-600 ${itemInCart ? "bg-blue-600" : "hover:bg-blue-600"} text-white px-4 py-3 rounded-r-lg font-semibold flex items-center w-full sm:w-auto justify-center`}
                >
                  {itemInCart ? `In Cart` :`Add to Cart`} 
                  <FaCartArrowDown className='ml-2' />
                </button>
              </div>

              <button 
                onClick={()=> setReviewsTab(!reviewsTab)} 
                className="border-2 border-transparent hover:border-white px-6 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-transparent text-white flex items-center w-full sm:w-auto justify-center"
              >
                See Reviews <FaComment className='ml-2' />
              </button>
            </div>

            {/* Update button */}
            {changeInQuantity && itemInCart &&
              <button 
                onClick={()=> {changeQuantityFunc(); setChangeInQuantity(false);}} 
                className="border-2 border-blue-600 bg-white/10 text-blue-600 font-semibold rounded-[15px] p-2 text-[10px] w-20"
              >
                Update
              </button>
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default ProductPage