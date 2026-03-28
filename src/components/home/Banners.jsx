import MarqueeModule from "react-fast-marquee";
import banner from "../../assets/home/banner.png";

const Marquee = MarqueeModule.default;

const Banners = () => {
  return (
    <Marquee className="lg:mt-20 mt-12">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <img src={banner} alt="banner" className="mx-2 rounded-lg" key={item} />
      ))}
    </Marquee>
  );
};

export default Banners;
