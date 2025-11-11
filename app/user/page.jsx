"use client"
import React from 'react'
import { CiUser } from 'react-icons/ci'

const Page = () => {
    const user={
        name: "Saul Goodman",
        order_history: [
            {id: 1, order_id: "#01537", item: "Eggs", status: "Delivered" , date: "2023-10-01", amount: "$29.99"},
            {id: 2, order_id: "#02856", item: "Bacon", status: "Pending", date: "2023-09-15", amount: "$49.99"},
            {id: 3, order_id: "#18686", item: "Orange Juice", status: "Cancelled", date: "2023-08-30", amount: "$19.99"}
        ]}
  return (
    <div className='h-100 flex justify-between'>
      <div className=' p-3 flex flex-col justify-between'>
        {/* User Information */}
        <div className='p-4 flex justify-center sm:justify-start items-center sm:space-x-2 bg-[#1E2330] rounded-[40px]'>
          <div className="flex items-center justify-center h-10 bg-[#702cdf]/20 transition-colors duration-200 rounded-full p-2 cursor-pointer">
            <CiUser size={22} className="text-[#702cdf]" />
          </div>
            <div className='flex-col sm:flex hidden justify-center'>
                <h2 className='font-bold'>{user.name}</h2>
            </div>
        </div>
        <div className='flex flex-col items-center space-y-2 mt-3'>
          <div className='flex-col sm:flex hidden justify-center'>
                <h3 className='font-semibold text-white'>Delivery Location:</h3>
            </div>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.2937603850125!2d-106.68660048909103!3d35.01510996012624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220dd0d34eaa27%3A0x51fbee5451640e47!2s4257%20Isleta%20Blvd%20SW%2C%20Albuquerque%2C%20NM%2087105%2C%20USA!5e0!3m2!1sen!2snp!4v1761837802440!5m2!1sen!2snp"
          width="280" 
          height="230"  >
          </iframe>
        </div>
        <div/>
      </div>
      <div className='w-[75%] h-full pb-8 pt-3 pr-4'>
        {/* User Orders */}
        <div className='p-5 px-7 h-full bg-[#1E2330] rounded-[40px]'>
          <h2 className='text-xl font-bold text-white'>Order History</h2>
            <div className="mt-5 w-full h-[80%] overflow-y-auto">
  <table className="w-full table-fixed text-sm text-white">
    <thead className="bg-gray-700/60">
      <tr>
        {["Order ID", "Date", "Item", "Amount", "Status"].map((header) => (
          <th key={header} className="text-center px-3 py-2">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {user.order_history.map((order) => (
        <tr key={order.id}>
                <td className="text-center px-3 py-2 font-semibold">{order.order_id}</td>
                <td className="text-center px-3 py-2 text-white/60">{order.date}</td>
                <td className="text-center px-3 py-2">{order.item}</td>
                <td className="text-center px-3 py-2">{order.amount}</td>
                <td className="text-center px-3 py-2">{order.status}</td>
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