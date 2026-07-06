import { Routes } from "../constants/app-routes"
import { apiClient } from "../lib/axios"

export const getProductDetailsByPdId=async(pdId)=>{
    return (await apiClient.get(`${Routes.productDetail.get}/${pdId}`)).data;
}

export const getProductDetailsByProductId=async(productId)=>{
    return (await apiClient.get(`${Routes.productDetail.getByProductId}/${productId}`)).data;
}

export const uploadImages=async(formData)=>{
   return (await apiClient.put(Routes.productDetail.uploadImages,formData)).data;
}