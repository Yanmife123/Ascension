import data from "../constant/data";
import { Background_Gradient, Background_Gradient2 } from "../assets";
import Head from "./Head";

const Feature = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="features"
    >
      <Head
        title={"Features"}
        heading={"Explore Ascension's Key Features"}
        paragraph={
          "Our tool provides real-time analytics, inventory management, taskautomation, and more all designed to simplify your workflow and maximize efficiency.."
        }
      />
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[19px] relative">
          {data.Feature_Data.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-blurWhiteSecond flex flex-col gap-3 rounded-[12px] backdrop-blur-[20px] z-3"
            >
              <div>
                <div className="border-1 border-blurWhite bg-blurWhiteThird p-[8px] rounded-[6px] w-fit">
                  <img src={feature.icon} alt="icon" />
                </div>
              </div>
              <h3 className="font-satoshi text-white text-[20px] leading-[1.2em] tracking-tight">
                {feature.heading}
              </h3>
              <p className="text-grey text-base font-sans leading-[1.4em] opacity-[0.8]">
                {feature.paragraph}
              </p>
            </div>
          ))}

          <div className=" lg:block hidden absolute left-0 top-[230px] h-[600px] w-full mask__gradient">
            <img
              src={Background_Gradient2}
              alt=""
              className="h-full w-full object-bottom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
