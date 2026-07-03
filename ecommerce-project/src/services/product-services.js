import { Routes } from "../constants/app-routes";
import { apiClient } from "../lib/axios";

export const createProducts = async (formData) => {
  return (await apiClient.post(Routes.product.create, formData)).data;
};

export const getProductsByCategoryId = async (catId) => {
  return (await apiClient.get(`${Routes.product.catId}/${catId}`)).data;
};

