import { Routes } from "../constants/app-routes";
import { apiClient } from "../lib/axios";

export const getUsers = async () => {
  return (await apiClient.get(Routes.user.getUsers)).data;
};
