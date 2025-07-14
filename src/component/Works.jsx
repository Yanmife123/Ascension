import Head from "./Head";
import data from "../constant/data";
// import { showingcontainerVariant } from "../constant/motion";

import { motion } from "motion/react";
const showingcontainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Works = () => {
  return (
    <section
      className="paddingY relative mt-5 flex flex-col items-center gap-[78px]"
      id="how_it_work"
    >
      <div className="section_gradient_container">
        <div className="ellpise2" />
        <div className="ellpise1" />
      </div>

      <Head
        title={"How It Works"}
        heading={"Everything You Need, Packed into One Dashboard"}
        paragraph={
          " From automating tasks to offering real-time insights, Ascension takes the complexity out of running your business. Here’s how it works:"
        }
      />
      <motion.div
        className="flex flex-wrap justify-center gap-3 text-white"
        // variants={showingcontainerVariant}
      >
        {data.How_its_works.map((work, index) => (
          <motion.div
            // variants={showingcontainerVariant}
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[350px] max-w-[450px] bg-blurWhite py-9 px-7 rounded-[5px] flex flex-col gap-9 justify-center items-center h-[500px]"
            key={work.id}
          >
            <div className="flex justify-center">
              <img src={work.src} alt="" className="" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <h4
                className="font-satoshi text-[20px] leading-[1.2em]
                text-white font-medium
                "
              >
                {work.heading}
              </h4>
              <p className="text-grey text-sm  font-sans font-normal leading-[1.4em] ">
                {work.paragraph}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
