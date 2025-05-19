import { useState } from "react";
import data from "../constant/data";
import { Check } from "../assets";
import Head from "./Head";

const Pricing = () => {
  const [planClick, setPlanClick] = useState(false);

  const hanldeClick = () => {
    setPlanClick((prev) => !prev);
  };

  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="pricing"
    >
      <Head
        title={"Pricing"}
        heading={"Pricing that makes sense"}
        paragraph={
          "   Each package comes with essential features to keep your store running smoothly, find the right plan for your business."
        }
      />
      <div className="flex gap-6 flex-col items-center w-full">
        <div
          className={`flex gap-[32px]  px-[20px] ${
            planClick ? "pr-0" : ""
          } bg-blurWhiteSecond border-1 border-blurWhite rounded-full relative`}
        >
          <div
            className={` ${
              planClick ? "text-white" : "text-black"
            } text-[14px] leading-[1.4em] font-sans z-2 ease-in-out transition cursor-pointer py-[8px]`}
            onClick={hanldeClick}
          >
            Monthly
          </div>
          <div
            className={` ${
              planClick ? "text-black" : "text-white"
            } text-[14px] leading-[1.4em] font-sans z-2 ease-in-out transition cursor-pointer flex gap-[7px] justify-center items-center`}
            onClick={hanldeClick}
          >
            <div className=" py-[8px]">Yearly</div>
            <div
              className={`${
                planClick ? "flex" : "hidden"
              }  text-black bg-grey py-[7px] px-1 rounded-full `}
            >
              - 20%
            </div>
          </div>
          <div
            className={`absolute z-1 top-0  ${
              planClick ? "left-[48%]" : "left-0"
            }  h-full w-[53%] bg-white rounded-full ease-in-out plans_click_transition`}
          ></div>
        </div>
        <div className=" lg:w-[85%] md:w-[70%] w-full grid py-3 lg:gap-[20px] gap-[30px] lg:grid-cols-3 grid-cols-1">
          {data.Payment_Plans.map((plan) => (
            <div
              key={plan.id}
              className={` p-8 border-t-1 border-blurWhiteFourth h-full rounded-[15px] flex flex-col gap-[32px]   ${
                plan.id === 2 ? "bg-blurWhiteSecond" : "bg-transparent"
              }`}
            >
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[20px] font-medium font-satoshi leading-[1.2em] text-white">
                    {plan.heading}
                  </h3>
                  <p className="text-white font-san text-[14px] leading-[1.4em]">
                    {plan.text}
                  </p>
                </div>
                <h2 className="text-white font-medium font-sans text-[20px]">
                  <span className="text-[32px] font-satoshi font-semibold">
                    {planClick ? plan.yearly : plan.monthly}
                  </span>
                  /Month
                </h2>
                <div className="w-full  bg-white h-[46px] center rounded-full font-medium font-sans leading-[1.4em] tracking-tight flex justify-center items-center cursor-pointer">
                  <div>Choose This Plan</div>
                </div>
              </div>
              <hr className="border-blurWhiteFourth" />
              <div className="flex flex-col gap-[12px]">
                {plan.benefit.map((benefit) => (
                  <div className="flex items-center gap-[10px]">
                    <img src={Check} alt="" className="h-[16px] w-[16px]" />
                    <div className="text-white text-[14px] leading-[1.4em] font-san">
                      {benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-[14px] font-sans font-medium leading-[1.4em] capitalize text-center">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
