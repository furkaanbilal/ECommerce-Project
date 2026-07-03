import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/category-services";

export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const getCategoryList = async () => {
    let response = await getCategories();
    setCategories(response.data);
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, getCategoryList }}>
      {children}
    </CategoryContext.Provider>
  );
};