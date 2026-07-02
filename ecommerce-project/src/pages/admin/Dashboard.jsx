import React, { useContext, useEffect, useState } from "react";
import {
  Users,
  Package,
  ShoppingCart,
  IndianRupee,
} from "lucide-react";
import { getAdapter } from "axios";
import { getUsers } from "../../services/user-services";
import { UserContext } from "../../context/app-contexts";

const Dashboard = () => {
  const{users}=useContext(UserContext);
 
  const stats = [
    {
      title: "Total Users",
      value:users.length,
      icon: <Users size={30} />,
    },
    {
      title: "Products",
      value: 56,
      icon: <Package size={30} />,
    },
    {
      title: "Orders",
      value: 0,
      icon: <ShoppingCart size={30} />,
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: <IndianRupee size={30} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-orange-500">
          Dashboard
        </h1>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400">{item.title}</p>
                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="bg-orange-500 p-3 rounded-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-zinc-900 rounded-2xl border border-orange-500/20 p-6">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-700 pb-3">
            <span>👤 New user registered</span>
            <span className="text-gray-400">2 min ago</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-3">
            <span>📦 Product added</span>
            <span className="text-gray-400">20 min ago</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-3">
            <span>🛒 New order placed</span>
            <span className="text-gray-400">Pending..</span>
          </div>

          <div className="flex justify-between">
            <span>💰 Payment received</span>
            <span className="text-gray-400">Pending..</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;