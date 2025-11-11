"use client"
import axiosInstance from "@/axiosInstance/axiosInstance";
import Product from "@/components/product";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  try{
    const res= await axiosInstance.get('/products');
    console.log(res.data.products)
   setProducts(res.data.products);
  }catch(error){
    console.error("Error fetching products:", error);
  }
}

useEffect(() => {
  fetchProducts();
}, []);
  return(
    <div className="mx-10 text-center">
    {/* <Product name="Sample Product" price="29.99" /> */}
    <div className="grid grid-cols-4 gap-6 space-y-2 p-10">
        {
          products.map((product, index) => (
            <Product key={index} id={product.id} image={product.thumbnail} name={product.title} price={product.price} />
          ))
        }
    </div>
    </div>
  )
}
