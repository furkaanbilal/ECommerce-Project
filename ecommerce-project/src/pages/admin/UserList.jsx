import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../services/user-services";
import Dashboard from "./Dashboard";
import { UserContext } from "../../context/app-contexts";

const UserList = () => {
  const{users,setUsers}=useContext(UserContext);

  const getUsersList = async () => {
      const response = await getUsers();
      if (response.isSuccess) {
        setUsers(response.data);
      }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-center">
            Users List
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-orange-500/20">
          <table className="min-w-full">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Id</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-zinc-800 odd:bg-black even:bg-zinc-950 hover:bg-zinc-900 transition"
                >
                  <td className="px-6 py-4 text-gray-300">{user.id}</td>

                  <td className="px-6 py-4 text-white">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {user.phoneNo}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {user.userRole}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {user.userStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid gap-5 md:hidden">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-zinc-900 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500 transition"
            >
              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-gray-400">ID</span>
                  <span className="text-white">{user.id}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white text-right break-all">
                    {user.email}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">
                    {user.phoneNo}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-white">
                    {user.userRole}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-white">
                    {user.userStatus}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {users.length === 0 && (
          <div className="mt-12 text-center text-gray-400 text-lg">
            No Users Found
          </div>
        )}

      </div>
    </div>
  );
};

export default UserList;