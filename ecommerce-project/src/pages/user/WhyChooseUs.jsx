import { Truck, ShieldCheck, RotateCcw, BadgeCheck } from "lucide-react";

const data = [
  {
    icon: <Truck size={40} />,
    title: "Fast Shipping",
    desc: "Delivery across the country.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Payment",
    desc: "100% safe transactions.",
  },
  {
    icon: <RotateCcw size={40} />,
    title: "Easy Returns",
    desc: "7-day return policy.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Premium Quality",
    desc: "Only the best products.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 p-8 rounded-3xl hover:-translate-y-2 transition"
            >
              <div className="text-orange-500 mb-5">{item.icon}</div>

              <h3 className="font-bold text-xl">{item.title}</h3>

              <p className="text-zinc-400 mt-3">{item.desc}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;