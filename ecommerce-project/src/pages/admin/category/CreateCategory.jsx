import React from "react";
import { useForm } from "react-hook-form";
import { createCategories } from "../../../services/category-services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const formSubmit = async (model) => {
    const formData = new FormData();
    formData.append("name", model.name);
    formData.append("description", model.description);
    formData.append("file", model.file[0]);

    let response = await createCategories(formData);

    if (response.isSuccess) toast.success(response.data);
    navigate("/admin/categories");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-2">
          Create Category
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Add a new category to your store
        </p>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-6"
        >
          {/* Category Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-2"
            >
              Category Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Category Name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-300 font-medium mb-2"
            >
              Description
            </label>

            <textarea
              name="description"
              id="description"
              rows="5"
              placeholder="Write Description..."
              {...register("description")}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none resize-none focus:border-orange-500 transition"
            ></textarea>

            {errors.description && (
              <p className="text-red-500 text-sm mt-2">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="file"
              className="block text-gray-300 font-medium mb-2"
            >
              Category Image
            </label>

            <input
              type="file"
              id="file"
              name="file"
              {...register("file", {
                required: "File is required",
              })}
              className="w-full bg-black border border-gray-700 rounded-lg text-gray-300 file:bg-orange-500 file:text-black file:border-0 file:px-4 file:py-3 file:mr-4 file:font-semibold hover:file:bg-orange-400 transition cursor-pointer"
            />

            {errors.file && (
              <p className="text-red-500 text-sm mt-2">
                {errors.file.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;