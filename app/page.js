"use client"
import axiosInstance from "@/axiosInstance/axiosInstance";
import Product from "@/components/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Home() {

  const [fetchError, setFetchError] = useState(false);
  const [searchMode, setSearchMode] = useState(false)
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState([]);

  const search= useSelector((state)=> state.search.value)

  useEffect(()=>{
    console.log(search)
  }, [search])


  const fetchProducts = async () => {
  try{
    const res= await axiosInstance.get('/products');
    console.log(res.data.products)
    setProducts(res.data.products)
  }catch(error){
    console.error("Error fetching products:", error);
  }
}

  const searchProduct= () => {
      if(search !== ""){
        setSearchMode(true)
        const filtered= products.filter((prod)=> prod.title.toLowerCase().includes(search.toLowerCase()))
          setSearchProducts(filtered);
          if(filtered.length === 0){
            setFetchError(true)
          }
          else{
            setFetchError(false)
          }
      }
      else{
        setSearchMode(false)
        setFetchError(false)
      }
  }

useEffect(() => {
  fetchProducts();
}, []);

useEffect(()=>{
  searchProduct()
}, [search], []);


  return(
    <div className="mx-10 text-center">
    {/* <Product name="Sample Product" price="29.99" /> */}
    {fetchError && 
    <div className="font-semibold text-white text-center flex items-center justify-center mt-30">No product with &quot;{search}&quot; is Available</div>}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 space-y-2 p-10">
        {
          searchMode ?
                  searchProducts.map((product, index) => (
                                    <Product key={index} id={product.id} image={product.thumbnail} name={product.title} price={product.price} />
                                  ))
          :
          products.map((product, index) => (
            <Product key={index} id={product.id} image={product.thumbnail} name={product.title} price={product.price} />
          ))
        }
    </div>
    </div>
  )
}
