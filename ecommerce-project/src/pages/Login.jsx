import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/auth-services";
import { ECommerceToken } from "../constants/auth-token";
import { useNavigate, Link } from "react-router";
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const formSubmit = async (model) => {
    const response = await login(model);
    console.log(response);
    localStorage.setItem(ECommerceToken, response.data.token);
    localStorage.setItem("UserRole", response.data.userRole);
    if (response.data.userRole === "Admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc123@gmail.com"
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Link
              to="/change-password"
              className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
            >
              Change Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg text-white font-semibold"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
