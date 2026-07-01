import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./lib/router.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" toastOptions={{
          duration: 3000,
          style: {
            background: "#111827", 
            color: "#fff",
            border: "1px solid #f97316", 
            borderRadius: "12px",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#f97316", 
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", 
              secondary: "#fff",
            },
          },
        }}/>
    <RouterProvider router={router} />
  </StrictMode>,
);
 