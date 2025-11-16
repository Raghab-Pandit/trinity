"use client"
import axiosInstance from '@/axiosInstance/axiosInstance';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { removeFromCart } from '@/Redux/Slices/cartSlice';

const Page = () => {

  const cart= useSelector((state)=> state.cart.value);
  const dispatch = useDispatch();

    const user={
        name: "Saul Goodman"
      };

  return (
    <div className='h-auto flex flex-col sm:flex-row justify-between w-full px-3'>

      {/* LEFT SIDE */}
      <div className='p-3 flex flex-col justify-between w-full sm:w-auto'>

        {/* User Info */}
        <div className='p-4 flex justify-center sm:justify-start items-center sm:space-x-2 bg-[#1E2330] rounded-[40px] w-full'>
          <div className="flex items-center justify-center h-10 bg-[#702cdf]/20 transition-colors duration-200 rounded-full p-2 cursor-pointer">
            <CiUser size={22} className="text-[#702cdf]" />
          </div>
            <div className='hidden sm:flex flex-col justify-center'>
                <h2 className='font-bold'>{user.name}</h2>
            </div>
        </div>

        {/* Map */}
        <div className='flex flex-col items-center space-y-2 mt-3 w-full'>
          <div className='hidden sm:flex flex-col justify-center'>
            <h3 className='font-semibold text-white'>Delivery Location :</h3>
          </div>
          
          <div className="w-full flex justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.2937603850125!2d-106.68660048909103!3d35.01510996012624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220dd0d34eaa27%3A0x51fbee5451640e47!2s4257%20Isleta%20Blvd%20SW%2C%20Albuquerque%2C%20NM%2087105%2C%20USA!5e0!3m2!1sen!2snp!4v1761837802440!5m2!1sen!2snp"
              width="100%" 
              height="230"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        <div/>
      </div>

      {/* RIGHT SIDE */}
      <div className='w-full sm:w-[75%] h-full pb-8 pt-3 sm:pr-4 mt-4 sm:mt-0'>

        <div className='p-5 px-3 sm:px-7 h-full bg-[#1E2330] rounded-[40px] w-full'>
          <h2 className='text-xl font-bold text-white text-center sm:text-left'>Cart</h2>

          <div className="mt-5 w-full h-[80%] overflow-x-auto overflow-y-auto">

            <table className="w-full min-w-[600px] table-fixed text-sm text-white">
              <thead className="bg-gray-700/90 sticky top-0">
                <tr>
                  {["Order ID", "Date", "Item", "Quantity", "Amount", "Status", "Delete"].map((header) => (
                    <th key={header} className="text-center px-3 py-2 sticky top-0">{header}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                { cart.length === 0 ?
                  <tr>
                    <td colSpan="7" className="text-center px-3 py-2 font-semibold">No orders placed yet.</td>
                  </tr>
                :
                cart.map((prod, index) => (
                  <tr key={prod.id}>
                    <td className="text-center px-3 py-2 font-semibold">#{Math.floor(Math.random()*10000)}</td>
                    <td className="text-center px-3 py-2 text-white/60">{prod.date}</td>

                    <td className="text-center px-3 py-2 cursor-pointer">
                      <Link href={`/products/${prod.product.id}`} className="text-white/80 hover:text-white">{prod.product.title}</Link>
                    </td>

                    <td className="text-center px-3 py-2">
                      <Link href={`/products/${prod.product.id}`} className="text-white/80 hover:text-white">{prod.quantity}</Link>
                    </td>

                    <td className="text-center px-3 py-2">${prod.product.price}</td>
                    <td className="text-center px-3 py-2">Pending</td>

                    <td className="text-center py-5 flex items-center justify-center">
                      <div 
                        onClick={()=> dispatch(removeFromCart(prod.id))}
                        className="flex items-center justify-center w-8 h-8 text-[20px] cursor-pointer hover:bg-red-400/40 transition-all bg-red-500/40 text-red-500 font-semibold rounded-[50%]">
                        <MdDeleteOutline />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Page