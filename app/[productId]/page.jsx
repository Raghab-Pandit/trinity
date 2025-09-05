import React from 'react'

const Page = async ({params}) => {

  let {productId}= await params;
  console.log(productId);
  return (
    <div>Product Page</div>
  )
}

export default Page