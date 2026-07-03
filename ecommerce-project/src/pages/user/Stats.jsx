const stats = [
  ["25K+", "Happy Customers"],
  ["100+", "Brands"],
  ["10K+", "Products"],
  ["99%", "Positive Reviews"],
];

const Stats = () => {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

        {stats.map(([number, label]) => (
          <div
            key={label}
            className="text-center"
          >
            <h2 className="text-5xl font-black text-orange-500">
              {number}
            </h2>

            <p className="text-zinc-400 mt-3">
              {label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;