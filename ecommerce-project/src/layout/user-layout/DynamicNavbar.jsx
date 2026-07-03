import React, { useContext } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { CategoryContext } from "../../context/category-context";

const containerVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const DynamicNavbar = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <nav className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto">

        <div className="overflow-x-auto scrollbar-hide px-4">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 py-3 min-w-max"
          >
            {categories?.map((category) => (
              <motion.li
                key={category.id}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="flex-shrink-0"
              >
                <NavLink
                  to={`/products/category/${category.id}`}
                  className={({ isActive }) =>
                    `relative flex items-center justify-center
                    px-6 py-2.5
                    rounded-full
                    text-sm font-semibold
                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                        : "bg-zinc-900 text-gray-300 hover:bg-orange-500 hover:text-white"
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </nav>
  );
};

export default DynamicNavbar;