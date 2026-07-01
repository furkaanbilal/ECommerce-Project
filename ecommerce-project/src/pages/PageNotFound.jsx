import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/404-bg.jpg')",
      }}
    >
      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl md:text-9xl font-extrabold text-orange-500 drop-shadow-lg">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-300 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
