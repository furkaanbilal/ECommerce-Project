import { NavLink , Link} from "react-router";
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  Users,
  Settings,
  X,
  ShoppingBag,
  PackageOpen,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menu = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/admin/usersList", icon: <Users size={20} /> },
    { name: "Categories", path: "/admin/categories", icon: <Tags size={20} /> },
    { name: "Products", path: "/admin/products", icon: <Package size={20} /> },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          w-72 h-screen
          bg-[#18181b]
          border-r border-zinc-800
          p-6
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Close (mobile only) */}
        <button
          className="lg:hidden mb-6"
          onClick={() => setSidebarOpen(false)}
        >
          <X />
        </button>

        {/* Logo */}
         <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center group-hover:rotate-6 transition">
                <ShoppingBag className="text-white" />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">As-</span>

                <span className="text-orange-500">Souq</span>
              </h1>
            </Link>
            </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-zinc-900 hover:text-orange-500"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;