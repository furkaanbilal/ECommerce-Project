import React from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "../services/auth-services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate();

  const formSubmit=async(model)=>{
    let response=await changePassword(model);
    if(response.isSuccess) toast.success(response.data)
      reset();
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-xl p-6 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="oldPassword" className="block text-gray-300 mb-2">
            Old-Password
          </label>

          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            placeholder="********"
            className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
            {...register("oldPassword", {
              required: "OldPassword is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-gray-300 mb-2">
            New-Password
          </label>

          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="********"
            className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white outline-none focus:border-orange-500 transition"
            {...register("newPassword", {
              required: "NewPassword is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">
            Confirm-Password
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

         <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg text-white font-semibold"
          >
            CHANGE PASSWORD
          </button>
      </form>
      </div>
    </div>
  );
};

export default ChangePassword;
