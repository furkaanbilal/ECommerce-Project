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
import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";
import UserList from "../pages/admin/UserList";

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
      { path: "change-password", Component: ChangePassword },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "products", Component: Products },
      { path: "categories", Component: Categories  },
      { path: "usersList", Component: UserList  },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default router;
