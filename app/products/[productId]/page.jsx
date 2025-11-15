import ProductPage from "@/components/productpage";
import { preloadStyle } from "next/dist/server/app-render/entry-base";
import React from "react";

const Page = async ({params}) => {

  let {productId}= await params;


  return (
    <>
    <ProductPage id ={productId} />
    </>
  )
}

export default Page