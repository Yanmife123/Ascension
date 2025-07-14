import GetStarted from "./GetStarted";
import { Hero_image, Background_Gradient } from "../assets";
import { delay, easeIn, motion } from "motion/react";
import { div } from "motion/react-client";

const Hero = () => {
  const defaultcontainerVariant = {
    hidden: { opacity: 0, y: -20, scale: 1.2, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0)",
      transition: {
        duration: 0.9,
      },
    },
  };
  const TextStaggerAnimation = () => {
    const texts = ["Clean and Modern Template", " for Elevating SaaS Products"];
    return (
      <div>
        <motion.span
          initial={"hidden"}
          animate={"show"}
          transition={{ staggerChildren: 0.2 }}
          aria-hidden
        >
          {texts.map((text, index) => (
            <span className="block" key={index}>
              {text.split(" ").map((word, index) => (
                <span className="inline-block" key={index}>
                  <motion.span
                    variants={defaultcontainerVariant}
                    className="inline-block"
                    key={index}
                  >
                    {word}
                  </motion.span>
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </div>
    );
  };

  return (
    <section id="hero" className="paddingY z-2 bg-black opacity-[1]">
      <div className="flex justify-center py-3">
        <div className="w-80% flex flex-col gap-[24px]">
          <motion.h2
            // initial={"hidden"}
            // animate={"visible"}
            // variants={{
            //   hidden: {
            //     opacity: 0,
            //     scale: 1,
            //     y: -50,
            //     filter: "blur(8px)",
            //   },
            //   visible: {
            //     opacity: 1,
            //     scale: 1,
            //     y: 0,
            //     filter: "blur(0px)",
            //   },
            // }}
            // transition={{
            //   duration: 1.2,
            //   ease: "easeIn",
            // }}
            className="font-satoshi md:text-[64px] text-[45px] leading-[1.2em] font-[500] text-white text-center mix-blend-difference tracking-tight "
          >
            <TextStaggerAnimation />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.2,
            }}
            className="text-white mix-blend-difference font-san font-normal text-base text-center leading-[1.4em]"
          >
            Ascension simplifies the way you manage your online store, offering
            a <br className="md:block hidden" />
            user-friendly dashboard that brings everything into one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 1,
              duration: 0.4,
              ease: "easeIn",
            }}
            className="flex gap-0 items-center justify-center"
          >
            <GetStarted />
            <div className="text-white mix-blend-difference py-3 px-8 font-sans hover:text-grey transition-[0.3s] cursor-pointer ">
              More Info
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-auto py-4 px-2 relative mt-[100px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="relative h-full w-full lg:block hidden">
            <motion.img
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.9,
                ease: "easeIn",
              }}
              src={Background_Gradient}
              alt=""
              className="h-[480px] w-full brightness-120 object-[center right] object-cover mix-blend-lighten mask__gradient absolute top-[-70px] scale-[1.1]"
            />
          </div>
        </div>

        <div className="flex lg:mt-5 md:mt-3 mt-0 flex-col md:justify-center justify-normal items-center">
          <div className="lg:h-[600px] md:h-[400px] h-auto md:w-[80%] w-full relative lg:mix-blend-screen lg:backdrop-blur-[10px]">
            <motion.img
              initial={{
                opacity: 0,
                y: 60,
                filter: "blur(3px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: "easeIn",
              }}
              src={Hero_image}
              alt="Hero image"
              className="md:h-full h-[300px] w-full object-contain relative z-1 brightness-200"
            />
            <div className=" lg:block hidden absolute h-[650px] w-full top-0 left-0  transparent_gradient z-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
