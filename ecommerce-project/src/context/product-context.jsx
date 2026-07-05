// import { createContext, useState } from "react";
// import { getProducts } from "../services/product-services";

// export const ProductContext=createContext();
// export const ProductProvider=({children})=>{
//   const[products,setProducts]=useState([]);
//   const getAllProducts=async()=>{
//     let response=await getProducts();
//     if(response.isSuccess) setProducts(response.data)
//   }
//   <ProductContext.Provider value={{products,getAllProducts}}>
//     {children}
//   </ProductContext.Provider>
// }