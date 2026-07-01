import { ShieldCheck, Truck, BadgeDollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={35} />,
    title: "Trusted Quality",
    desc: "Every product is carefully selected to ensure quality and customer satisfaction.",
  },
  {
    icon: <Truck size={35} />,
    title: "Fast Delivery",
    desc: "Quick and reliable shipping to get your order to your doorstep on time.",
  },
  {
    icon: <BadgeDollarSign size={35} />,
    title: "Best Prices",
    desc: "Premium products at competitive prices without compromising quality.",
  },
  {
    icon: <Headphones size={35} />,
    title: "24/7 Support",
    desc: "Our support team is always available to help you with your shopping experience.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      

        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Shopping Made
          <span className="text-orange-500"> Simple.</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
          We believe online shopping should be simple, secure, and enjoyable.
          Our mission is to provide premium products with a seamless shopping
          experience and outstanding customer service.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#18181b] border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition duration-300"
            >
              <div className="text-orange-500 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>


    </section>
  );
};

export default AboutUs;