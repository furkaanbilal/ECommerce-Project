import { useState } from "react";
import { Outlet } from "react-router";
import AdminHeader from "./AdminHeader";
import Sidebar from "./SideBar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col lg:ml-72">

        <AdminHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;