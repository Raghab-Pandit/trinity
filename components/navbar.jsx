'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TbSwords } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Link from 'next/link';
import SearchContext from '@/ContextAPI/SearchContext';

const Navbar = () => {
  //States
    const [search, setSearch]= useState('');

  //Functions



  return (
    <SearchContext.Provider value={search}>
<div className="bg-gray-900 h-16 border-b border-[#712cdf70] flex items-center justify-between px-6 shadow-md">
  {/* Logo Section */}
  <Link className="flex items-center space-x-3 cursor-pointer" href={'/'}>
    <TbSwords size={32} className="text-[#702cdf]" />
    <h1 className="text-2xl font-semibold text-white">Trinity</h1>
  </Link>

  {/* Right Section */}
  <div className="flex items-center space-x-5">
    {/* Search Bar */}
    <div className="flex items-center bg-gray-800 focus:border-2 focus:border-[#702cdf] rounded-full h-10 px-3 w-[300px]">
      <IoSearchOutline size={18} className="text-[#702cdf]" />
      <input
        type="text"
        placeholder="Search for products..."
        onChange={( e )=> setSearch(e.target.value)}
        value={search}
        className="ml-2 w-full bg-transparent text-white placeholder-gray-400 text-sm outline-none"
      />
    </div>

    {/* User Icon */}
    <Link href={'/user'} className="flex items-center justify-center bg-[#702cdf]/20 hover:bg-[#702cdf]/40 transition-colors duration-200 rounded-full p-2 cursor-pointer">
      <CiUser size={22} className="text-[#702cdf]" />
    </Link>
  </div>
</div>
  </SearchContext.Provider>
  )
}

export default Navbar