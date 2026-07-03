import React from "react";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Star,
  Users,
  HeartHandshake,
} from "lucide-react";

const LearnMore = () => {
  const features = [
    {
      icon: <ShoppingBag size={35} />,
      title: "Wide Product Collection",
      description:
        "Discover thousands of carefully selected products from trusted brands at competitive prices.",
    },
    {
      icon: <Truck size={35} />,
      title: "Fast Delivery",
      description:
        "We ensure quick and reliable shipping so your favorite products arrive on time.",
    },
    {
      icon: <ShieldCheck size={35} />,
      title: "Secure Shopping",
      description:
        "Your payments and personal information are protected with advanced security.",
    },
    {
      icon: <Star size={35} />,
      title: "Quality Guaranteed",
      description:
        "Every product is checked to ensure you receive the best shopping experience.",
    },
    {
      icon: <Users size={35} />,
      title: "Customer First",
      description:
        "Our support team is always available to help with your questions and concerns.",
    },
    {
      icon: <HeartHandshake size={35} />,
      title: "Trusted Service",
      description:
        "Thousands of happy customers trust us for quality products and outstanding service.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-orange-500 uppercase tracking-widest font-semibold">
          Learn More
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-5">
          Welcome to{" "}
          <span className="text-orange-500">Our Store</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
          We are passionate about delivering premium products with exceptional
          customer service. Whether you're shopping for electronics, fashion,
          accessories, or everyday essentials, our mission is to make every
          purchase simple, secure, and enjoyable.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-orange-500 mb-6">{item.icon}</div>

              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    

      {/* Footer CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to Start Shopping?
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Browse our collection and discover products you'll love. We’re here
          to make your shopping experience enjoyable from start to finish.
        </p>
      </section>
    </div>
  );
};

export default LearnMore;