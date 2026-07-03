import { Routes } from "../constants/app-routes";
import { apiClient } from "../lib/axios";

export const getCategories = async () => {
  return (await apiClient.get(Routes.category.getAll)).data;
};

export const createCategories = async (formData) => {
  return (await apiClient.post(Routes.category.create, formData)).data;
};
