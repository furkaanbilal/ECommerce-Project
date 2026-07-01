import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-5">
          {/* Top Navbar */}

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

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex gap-3">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-lg transition ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:text-orange-500 hover:bg-zinc-900"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Search */}

            <div className="hidden md:block w-80">
              <div className="relative">
                <Search
                  className="absolute left-4 top-3 text-orange-500"
                  size={18}
                />

                <input
                  placeholder="Search Products..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2.5 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Right Icons */}

            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-zinc-900 rounded-lg transition">
                <ShoppingCart />

                <span className="absolute -top-1 -right-1 bg-orange-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <div className="relative group hidden md:block">
                <button className="p-2 rounded-lg hover:bg-zinc-900 transition">
                  <User />
                </button>

                <div
                  className="absolute right-0 top-full pt-2
               opacity-0 invisible
               group-hover:opacity-100
               group-hover:visible
               transition-all duration-300"
                >
                  <div className="w-56 overflow-hidden rounded-xl bg-[#18181b] border border-zinc-800 shadow-2xl">
                    <Link
                      to="/login"
                      className="block px-5 py-3 text-gray-300 hover:bg-orange-500 hover:text-white transition"
                    >
                      Login
                    </Link>

                    <Link
                      to="/sign-up"
                      className="block px-5 py-3 text-gray-300 hover:bg-orange-500 hover:text-white transition"
                    >
                      Sign Up
                    </Link>

                    {/* <Link
                      to="/change-password"
                      className="block px-5 py-3 text-gray-300 hover:bg-orange-500 hover:text-white transition"
                    >
                      Change Password
                    </Link> */}
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-zinc-900 rounded-lg transition"
              >
                <Menu />
              </button>
            </div>
          </div>

          {/* Mobile Search */}

          <div className="md:hidden pb-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-3 text-orange-500"
                size={18}
              />

              <input
                placeholder="Search Products..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2.5 pl-11 pr-4 outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-zinc-950 border-r border-zinc-800 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h2 className="text-xl font-bold">
            <span className="text-white">As-</span>

            <span className="text-orange-500">Souq</span>
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col p-5">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-lg mb-2 transition ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "hover:bg-zinc-900 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <hr className="my-5 border-zinc-800" />

          <Link
            to="/login"
            className="py-3 px-4 rounded-lg hover:bg-zinc-900 hover:text-orange-500"
          >
            Login
          </Link>

          <Link
            to="/sign-up"
            className="py-3 px-4 rounded-lg hover:bg-zinc-900 hover:text-orange-500"
          >
            Sign Up
          </Link>

          {/* <Link
            to="/change-password"
            className="py-3 px-4 rounded-lg hover:bg-zinc-900 hover:text-orange-500"
          >
            Change Password
          </Link> */}
        </nav>
      </div>
    </>
  );
};

export default Header;
