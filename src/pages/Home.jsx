import Banners from "../components/home/Banners";
import Details from "../components/home/Details";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";

const Home = () => {
  return (
    <>
      <Hero />
      <Banners/>
      <Details/>
      <Features/>
      <Tools />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
