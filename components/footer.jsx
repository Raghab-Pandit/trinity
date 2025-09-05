import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 overflow-hidden border-t border-[#712cdf70]">
      {/* Blurred Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#6d28d9]/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d14cff]/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Navigation */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Navigation</h2>
          <ul className="space-y-2 text-white text-sm">
            <li className="hover:underline hover:text-[#d14cff] cursor-pointer transition">About Us</li>
            <li className="hover:underline hover:text-[#d14cff] cursor-pointer transition">Contact</li>
            <li className="hover:underline hover:text-[#d14cff] cursor-pointer transition">Privacy Policy</li>
            <li className="hover:underline hover:text-[#d14cff] cursor-pointer transition">Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter / Email Input */}
        <div className="flex items-center bg-gray-900 border border-[#712cdf] rounded-md h-12 px-3 w-full md:w-96 focus-within:ring-2 focus-within:ring-[#702cdf] transition-all">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="ml-2 w-full bg-transparent text-white placeholder-gray-400 text-sm outline-none"
          />
          <button className="ml-3 bg-[#6d28d9] hover:bg-[#702cdf] text-white px-4 py-1 rounded-md transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-[#712cdf70] mt-10">
        <p className="text-center text-white p-4 text-sm">
          © 2024 Trinity. All rights reserved.
        </p>
        <p className="text-center text-white text-xs mb-4">
          *this is a dummy website developed by Raghab Pandit*
        </p>
      </div>
    </footer>
  );
};

export default Footer;
