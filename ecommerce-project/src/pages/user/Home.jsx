import Hero from "./Hero";
import Stats from "./Stats";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
  return (
    <main className="bg-zinc-950 text-white overflow-hidden">
      <Hero />
      <WhyChooseUs />
      <Stats />
    </main>
  );
};

export default Home;