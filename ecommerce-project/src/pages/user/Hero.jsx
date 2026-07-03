import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Discover
            <span className="text-orange-500"> Premium </span>
            Products
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Shop thousands of carefully selected products with premium
            quality, fast delivery and unbeatable prices.
          </p>

          <div className="flex gap-5 mt-10">

            {/* <Link
              to="/products"
              className="bg-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Shop Now
            </Link> */}

            <Link to="learnMore" className="border border-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 transition">
              Learn More
            </Link>

          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;