import { Routes } from "../constants/app-routes"
import { apiClient } from "../lib/axios"

export const createCart=async(model)=>{
    return (await apiClient.post(Routes.cart.addCart,model)).data;
}

export const getCarts=async()=>{
    return (await apiClient.get(Routes.cart.getCart)).data;
}

export const deleteCarts=async(id)=>{
    return (await apiClient.delete(`${Routes.cart.deleteCart}/${id}`)).data;
}