import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { getCategories } from "../../../services/category-services";
import { BASE_URL } from "../../../constants/app-urls";
import { CategoryContext } from "../../../context/category-context";

const Categories = () => {
  const{categories}=useContext(CategoryContext);
 
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-end mb-6">
        <Link
          to="create-categories"
          className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
        >
          Create Categories
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-orange-500/20">
        <table className="min-w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Id</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Description</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-b border-zinc-800 odd:bg-black even:bg-zinc-950 hover:bg-zinc-900 transition"
              >
                <td className="px-6 py-4 text-gray-300">{category.id}</td>

                <td className="px-6 py-4 text-white">{category.name}</td>

                <td className="px-6 py-4">
                  <img
                    src={`${BASE_URL}${category.filePath}`}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-lg border border-zinc-700"
                  />
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {category.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-5 md:hidden">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-zinc-900 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500 transition"
          >
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">ID</span>
                <span className="text-white">{category.id}</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-gray-400">Name</span>
                <span className="text-white break-all text-right">
                  {category.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Image</span>
                   <td className="px-6 py-4">
                  <img
                    src={`${BASE_URL}${category.filePath}`}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-lg border border-zinc-700"
                  />
                </td>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Description</span>
                <span className="text-white text-right break-all">
                  {category.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="mt-12 text-center text-gray-400 text-lg">
          No Categories Found
        </div>
      )}
    </div>
  );
};

export default Categories;
