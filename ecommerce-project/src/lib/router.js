import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/user-layout/MainLayout";
import AboutUs from "../pages/user/AboutUs";
import ContactUs from "../pages/user/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Home from "../pages/user/Home";
import SignUp from "../pages/SignUp";
import ChangePassword from "../pages/ChangePassword";
import AdminLayout from "../layout/admin-layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/product/Products";
import Categories from "../pages/admin/category/Categories";
import UserList from "../pages/admin/UserList";
import CreateCategory from "../pages/admin/category/CreateCategory";
import CreateProduct from "../pages/admin/product/CreateProduct";
import ProductList from "../pages/user/products/ProductList";
import ProductDetails from "../pages/user/products/ProductDetails";
import LearnMore from "../pages/user/LearnMore";
import UploadImages from "../pages/admin/UploadImages";
import Cart from "../pages/user/cart/Cart";
import UpdateProduct from "../pages/admin/product/UpdateProduct";
import AdminProductDetails from "../pages/admin/product/AdminProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: AboutUs },
      { path: "contact-us", Component: ContactUs },
      { path: "login", Component: Login },
      { path: "sign-up", Component: SignUp },
      { path: "learnMore", Component: LearnMore },
      { path: "cart", Component: Cart },
      { path: "change-password", Component: ChangePassword },
      {path: "products/category/:id" , Component:ProductList},
      {path: "products/productDetails/:id" , Component:ProductDetails}
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "products", Component: Products },
      { path: "categories", Component: Categories},
      { path: "categories/create-categories", Component: CreateCategory},
      { path: "products/create-products", Component: CreateProduct},
      { path: "usersList", Component: UserList  },
      { path: "uploadImages/:id", Component: UploadImages  },
      { path: "products/prod-id-/:id", Component: UpdateProduct  },
      { path: "products/prod-details/:pdid", Component: AdminProductDetails},
    ],
  }, 
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default router;
