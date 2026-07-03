import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { createProducts } from "../../../services/product-services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { CategoryContext } from "../../../context/category-context";

const CreateProduct = () => {
  const { categories } = useContext(CategoryContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const formSubmit = async (model) => {
    const formData = new FormData();
    formData.append("title", model.title);
    formData.append("brand", model.brand);
    formData.append("description", model.description);
    formData.append("units", model.units);
    formData.append("categoryId", model.categoryId);
    formData.append("discount", model.discount);
    formData.append("price", model.price);
    formData.append("file", model.file[0]);
    let response = await createProducts(formData);
    if (response.isSuccess) toast.success(response.data);
    navigate("/admin/products");
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-2xl p-6 sm:p-8">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="bg-zinc-900 border border-orange-500/20 rounded-2xl p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="text-gray-300 mb-2 block">Product Title</label>

              <input
                type="text"
                name="title"
                placeholder="Enter Product Title"
                {...register("title", {
                  required: "Title is required",
                })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.tile.message}
                </p>
              )}
            </div>

            {/* Brand */}
            <div>
              <label className="text-gray-300 mb-2 block">Brand</label>

              <input
                type="text"
                name="brand"
                placeholder="Enter Brand"
                {...register("brand", { required: "Brand is required" })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.brand.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-300 mb-2 block">Category</label>

              <select
                name="categoryId"
                {...register("categoryId", {
                  required: "Category is required",
                })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              >
                <option value="">Select Category</option>

                {categories && categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.categoryId.message}
                </p>
              )}
            </div>

            {/* Unit */}
            <div>
              <label className="text-gray-300 mb-2 block">Unit</label>

              <select
                name="units"
                {...register("units", { required: "Units is required" })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              >
                <option value="">Select Unit</option>
                <option value="1">Piece</option>
                <option value="2">Gram</option>
                <option value="3">KG</option>
                <option value="4">Litre</option>
                <option value="5">Dozen</option>
                <option value="6">Mitre</option>
                <option value="7">Pair</option>
              </select>
              {errors.units && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.units.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-300 mb-2 block">Price</label>

              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 1,
                    message: "Price must be greater than 0",
                  },
                })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Discount */}
            <div>
              <label className="text-gray-300 mb-2 block">Discount (%)</label>

              <input
                type="number"
                name="discount"
                placeholder="Enter Discount"
                {...register("discount", { required: "Discount is required" })}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
            </div>
            {errors.discount && (
              <p className="text-red-500 text-sm mt-2">
                {errors.discount.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 mb-2 block">Description</label>

            <textarea
              rows={5}
              name="description"
              placeholder="Write Product Description..."
              {...register("description")}
              className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-2">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="text-gray-300 mb-2 block">Product Image</label>

            <input
              type="file"
              name="file"
              {...register("file", { required: "Image is required" })}
              className="w-full rounded-lg bg-black border border-zinc-700 text-white file:bg-orange-500 file:text-black file:border-0 file:px-4 file:py-3 file:mr-4"
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-2">{errors.file.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
