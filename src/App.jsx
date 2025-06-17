import {
  Navbar,
  Hero,
  Companies,
  Works,
  Benefit,
  Benefit_secound,
  FreeTrail,
  Feature,
  Pricing,
  Testomonail,
  Faq,
  Final,
  Footer,
} from "./component";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className=" bg-black overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, height: "1000px" }}
        animate={{ opacity: 0.46, height: "1360px" }}
        transition={{
          delay: 0.5,
          ease: "easeIn",
          duration: 0.8,
        }}
        className="purple___gradient "
      />
      <header className="flex__center  paddingX fixed top-0 left-0 w-full py-4  lg:border-b-0 border-b-1  border-b-blurWhite lg:bg-transparent bg-blurBlack backdrop-blur-[10px] z-5 ">
        <Navbar />
      </header>

      <div className="flex__center try mt-[80px]">
        <div className="boxWidth">
          <Hero />
          <Companies />
          <Works />
          <Benefit />
          <Benefit_secound />
          <FreeTrail />
          <Feature />
          <Pricing />
          <Testomonail />
          <Faq />
          <Final />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
