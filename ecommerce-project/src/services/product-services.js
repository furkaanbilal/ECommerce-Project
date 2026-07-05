import { Routes } from "../constants/app-routes";
import { apiClient } from "../lib/axios";

export const createProducts = async (formData) => {
  return (await apiClient.post(Routes.product.create, formData)).data;
};

export const getProductsByCategoryId = async (catId) => {
  return (await apiClient.get(`${Routes.product.catId}/${catId}`)).data;
};

export const getProducts=async()=>{
  return (await apiClient.get(Routes.product.getAll)).data;
}

export const updateProduct=async(model)=>{
  return (await apiClient.put(Routes.product.updateProduct,model)).data;
}

export const getById=async(id)=>{
   return (await apiClient.get(`${Routes.product.getById}/${id}`)).data;
}
