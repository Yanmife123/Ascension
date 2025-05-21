import React from "react";
import GetStarted from "./GetStarted";

const Final = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative h-[500px] justify-center"
      id="features"
    >
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="heading">
          Ready to Take Your <br className="lg:block hidden" /> Store to the
          Next Level?
        </h2>
        <p className="paragraph">Start now and see the difference.</p>
        <GetStarted />
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center ">
        <div className="bg-purple_background h-[500px] w-[600px] blur-[200px]"></div>
      </div>
    </section>
  );
};

export default Final;
