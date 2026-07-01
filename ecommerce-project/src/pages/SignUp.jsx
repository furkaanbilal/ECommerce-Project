import React from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../services/auth-services";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit=async(model)=>{
    let response=await signUp(model);
    if(response.isSuccess){
      toast.success(response.data)
      reset();
    }
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-xl p-6 sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit(formSubmit)}>
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
            <label htmlFor="phoneNo" className="block text-gray-300 mb-2">
              PhoneNo
            </label>

            <input
              type="number"
              id="phoneNo"
              name="phoneNo"
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
              {...register("phoneNo", {
                required: " PhoneNo is required",
              })}
            />

            {errors.phoneNo && (
              <p className="text-red-500 text-sm mt-2">
                {errors.phoneNo.message}
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-300 mb-2"
            >
              ConfirmPassword
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
              {...register("confirmPassword", {
                required: "confirmPassword is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="userRole" className="block text-gray-300 mb-2">
              UserRole
            </label>

            <select
              id="userRole"
              name="userRole"
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
              defaultValue=""
              {...register("userRole", {
                required: "UserRole is required",
                valueAsNumber:true
              })}
            >
              <option value="" disabled className="text-gray-500">
                Select your role
              </option>

              <option value="1">Admin</option>
              <option value="2">Customer</option>
              <option value="3">Merchant</option>
            </select>

            {errors.userRole && (
              <p className="text-red-500 text-sm mt-2">{errors.userRole.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg text-white font-semibold"
          >
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
