import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getById, updateProduct } from "../../../services/product-services";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const getProductById = async (id) => {
    let response = await getById(id);
    console.log(response.data.units);
    console.log(response);
    if (response.isSuccess) reset(response.data);
  };
  useEffect(() => {
    getProductById(id);
  }, [id]);
  const unitMap = {
    Piece: 1,
    Gram: 2,
    KG: 3,
    Litre: 4,
    Dozen: 5,
    Meter: 6,
    Pair: 7,
  };

  const editProduct = async (model) => {
    model.units = unitMap[model.units];
    let response = await updateProduct(model);
    if (response.isSuccess) toast.success("Product Updated Successfully");
    navigate("/admin/products");
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-orange-500/30 rounded-2xl shadow-2xl p-6 sm:p-8">
        <form
          onSubmit={handleSubmit(editProduct)}
          className="bg-zinc-900 border border-orange-500/20 rounded-2xl p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block">Product Id</label>

              <input
                readOnly
                {...register("id")}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
            </div>
            {/* Title */}
            <div>
              <label className="text-gray-300 mb-2 block">Product Title</label>

              <input
                type="text"
                name="title"
                placeholder="Enter Product Title"
                {...register("title")}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="text-gray-300 mb-2 block">Brand</label>

              <input
                type="text"
                name="brand"
                placeholder="Enter Brand"
                {...register("brand")}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              />
            </div>

            {/* Unit */}
            <div>
              <label className="text-gray-300 mb-2 block">Unit</label>

              <select
                name="units"
                {...register("units")}
                className="w-full rounded-lg bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
              >
                <option value="">Select Unit</option>
                <option value="Piece">Piece</option>
                <option value="Gram">Gram</option>
                <option value="KG">KG</option>
                <option value="Litre">Litre</option>
                <option value="Dozen">Dozen</option>
                <option value="Meter">Meter</option>
                <option value="Pair">Pair</option>
              </select>
              {errors.units && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.units.message}
                </p>
              )}
            </div>
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
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
