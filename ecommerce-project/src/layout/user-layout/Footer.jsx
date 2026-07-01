import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-bold">
          FuRk<span className="text-orange-500">AaN</span>
        </h2>

        {/* Links */}
        <div className="flex gap-8 my-4 md:my-0">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link to="/about-us" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link to="/contact-us" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;