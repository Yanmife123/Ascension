import { Background_Gradient, Benefit4, Benefit5, Check } from "../assets";
import data from "../constant/data";
import GetStarted from "./GetStarted";

const Benefit_secound = () => {
  return (
    <section className="paddingY flex justify-center ">
      <div className="lg:w-[80%] w-full ">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-[64px]">
          <div className="flex-1 flex items-center lg:justify-start justify-center">
            <div className="lg:w-[80%] w-full flex gap-4 flex-col lg:items-start items-center">
              <h3 className="font-satoshi md:text-[36px] text-[30px] leading-[1.2em] text-white tracking-tight lg:text-start text-center">
                Centralized Insights for Smarter Decisions
              </h3>
              <p className="text-white font-sans text-base leading-[1.4em] lg:text-start text-center md:w-[400px] lg:w-full">
                Ascension's insights dashboard gives you instant access to key
                metrics, helping you track inventory, monitor trends, and make
                data-driven choices that fuel growth.
              </p>
              <div className="mt-4 flex lg:justify-start justify-center">
                <GetStarted />
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-end relative">
            <div className="absolute top-0 left-0 h-[100%] w-[100%] z-[1] blur-[50px]">
              <img
                src={Background_Gradient}
                alt=""
                srcset=""
                className="h-full w-full mix-blend-darken"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-3"></div>

            <div className="absolute left-0 top-0 h-full w-full bg-blurWhite z-2 rounded-[5px]"></div>
            <div className="absolute top-0 left-0 h-full w-full transparent_gradient z-3"></div>
            <div className="h-[88%] z-[3]">
              <img src={Benefit5} alt="" srcset="" className="h-[100%]" />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col  mt-[200px] lg:gap-0 gap-[64px]">
          <div className="flex-1 flex items-center lg:justify-end  justify-center">
            <div className="lg:w-[85%] w-full flex gap-4 flex-col lg:items-start items-center">
              <h3 className="font-satoshi md:text-[36px] text-[30px] leading-[1.2em] text-white tracking-tight lg:text-start text-center">
                Advanced Marketing Tools for Brand Growth
              </h3>
              <p className="text-white font-sans text-base leading-[1.4em] lg:text-start text-center md:w-[400px] lg:w-full">
                Boost your reach with Ascension's built-in marketing tools.
                Automate campaigns, tailor your messages, and drive customer
                engagement to grow your brand and increase conversions.
              </p>
              <div className=" mt-3 flex gap-3 flex-col lg:items-start items-center">
                {data.Benefit_text.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="bg-blurWhiteSecond border-1 border-blurWhiteSecond py-1 px-4 pl-3 flex gap-3 items-center rounded-[12px]  md:max-w-[400px] w-full"
                  >
                    <img src={Check} alt="" srcset="" className="h-[16px]" />
                    <div className="text-white text-[14px] font-sans ">
                      {benefit.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-end relative">
            <div className="absolute top-0 left-0 h-[100%] w-[100%] z-[1] blur-[50px]">
              <img
                src={Background_Gradient}
                alt=""
                srcset=""
                className="h-full w-full mix-blend-darken"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-3"></div>

            <div className="absolute left-0 top-0 h-full w-full bg-blurWhite z-2 rounded-[5px]"></div>
            <div className="absolute top-0 left-0 h-full w-full transparent_gradient z-3 "></div>
            <div className="h-[88%] z-[4] relative">
              <img src={Benefit4} alt="" srcset="" className="h-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit_secound;
