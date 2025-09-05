import axiosInstance from "@/axiosInstance/axiosInstance";
import Product from "@/components/product";
import Image from "next/image";

const fetchProducts = async () => {
  try{
    const res= await axiosInstance.get('/products');
    console.log(res.data.products)
   return res.data.products;
  }catch(error){
    console.error("Error fetching products:", error);
  }
}

export default async function Home() {
  const products = await fetchProducts();
  return(
    <div className="mx-10 text-center">
        <h1 className="text-3xl text-white font-bold mt-10">Our Collection</h1>
    {/* <Product name="Sample Product" price="29.99" /> */}
    <div className="grid grid-cols-4 gap-6 space-y-2 p-10">
        {
          products.map((product, index) => (
            <Product key={index} image={product.thumbnail} name={product.title} price={product.price} />
          ))
        }
    </div>
    </div>
  )
}
