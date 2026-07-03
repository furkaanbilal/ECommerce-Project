import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { CategoryContext } from "../../../context/category-context";
import { getProductsByCategoryId } from "../../../services/product-services";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../constants/app-urls";
import { Images, ImagesIcon, ImageUp, Upload } from "lucide-react";

const Products = () => {
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  const getProducts = async (categoryId) => {
    let response = await getProductsByCategoryId(categoryId);
    console.log(response);
    if (response.isSuccess) setProducts(response.data);
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-orange-500">Products</h1>

        <div className="flex justify-end mb-6">
          <Link
            to="create-products"
            className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
          >
            Create Products
          </Link>
        </div>
      </div>

      <div className="bg-zinc-900 border border-orange-500/20 rounded-xl p-6">
        <label className="block text-gray-300 mb-3 font-medium">
          Select Category To Watch Products...
        </label>

        <select
          name="categoryId"
          id="categoryId"
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none"
          onChange={(e) => {
            getProducts(e.target.value);
          }}
        >
          <option value="">Select</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-orange-500/20">
        <table className="min-w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Id</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Brand</th>
              <th className="px-6 py-4 text-left">Units</th>
              <th className="px-6 py-4 text-left">PD-Id</th>
              <th className="px-6 py-4 text-left">Upload Images</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-zinc-800 odd:bg-black even:bg-zinc-950 hover:bg-zinc-900 transition"
              >
                <td className="px-6 py-4 text-gray-300">{product.id}</td>

                <td className="px-6 py-4 text-white">{product.title}</td>

                <td className="px-6 py-4">
                  <img
                    src={`${BASE_URL}${product.filePath}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border border-zinc-700"
                  />
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {product.description}
                </td>
                <td className="px-6 py-4 text-gray-300">{product.brand}</td>
                <td className="px-6 py-4 text-gray-300">{product.units}</td>
                <td className="px-6 py-4 text-gray-300">
                  {product.productDetailId}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  <Link to={`/admin/uploadImages/${product.productDetailId}`}>
                    <ImagesIcon />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-5 md:hidden">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500 transition"
          >
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">ID</span>
                <span className="text-white">{product.id}</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-gray-400">Title</span>
                <span className="text-white break-all text-right">
                  {product.title}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Image</span>
                <td className="px-6 py-4">
                  <img
                    src={`${BASE_URL}${product.filePath}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border border-zinc-700"
                  />
                </td>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Description</span>
                <span className="text-white text-right break-all">
                  {product.description}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Brand</span>
                <span className="text-white text-right break-all">
                  {product.brand}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price</span>
                <span className="text-white text-right break-all">
                  {product.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Discount</span>
                <span className="text-white text-right break-all">
                  {product.discount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">PD-Id</span>
                <span className="text-white text-right break-all">
                  {product.productDetailId}
                </span>
              </div>
               <td className="px-6 py-4 text-gray-300">
                <span className="text-gray-400">Upload-Images</span>
                  <Link to={`/admin/uploadImages/${product.productDetailId}`}>
                    <ImagesIcon />
                  </Link>
                </td>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="mt-12 text-center text-gray-400 text-lg">
            No Products Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
