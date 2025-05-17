import GetStarted from "./GetStarted";
import { Hero_image } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className="paddingY z-2 bg-black opacity-[1]">
      <div className="flex justify-center py-3">
        <div className="w-80% flex flex-col gap-[24px]">
          <h2 className="font-satoshi md:text-[64px] text-[45px] leading-[1.2em] font-[500] text-white text-center mix-blend-difference tracking-tight ">
            Clean and Modern Template <br className="md:block hidden" /> for
            Elevating SaaS Products
          </h2>
          <p className="text-white mix-blend-difference font-san font-normal text-base text-center leading-[1.4em]">
            Ascension simplifies the way you manage your online store, offering
            a <br className="md:block hidden" />
            user-friendly dashboard that brings everything into one place.
          </p>
          <div className="flex gap-0 items-center justify-center">
            <GetStarted />
            <div className="text-white mix-blend-difference py-3 px-8 font-sans hover:text-grey transition-[0.3s] cursor-pointer ">
              More Info
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto py-4 px-2  hero__background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        {/* <div className="absolute inset-0  transparent_gradient "></div> */}
        <div className="flex lg:mt-5 md:mt-3 mt-0 flex-col md:justify-center justify-normal items-center">
          <div className="lg:h-[600px] md:h-[400px] h-[350px] md:w-[80%] w-full relative lg:mix-blend-screen lg:backdrop-blur-[10px]">
            <img
              src={Hero_image}
              alt="Hero image"
              className="h-[inherit] w-full lg:object-contain object-contain relative z-1"
            />
            <div className="absolute h-full w-full top-0 left-0  transparent_gradient z-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
