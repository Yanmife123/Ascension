import { Background_Gradient2, Background_Gradient } from "../assets";
import GetStarted from "./GetStarted";

const FreeTrail = () => {
  return (
    <section className="paddingY">
      <div className="flex w-full  relative rounded-[30px] box__shadow__purple py-9 lg:px-7 md:px-5 px-1 border-1 border-blurWhite">
        <div className="absolute top-0 left-0 h-full w-full opacity-[0.8] rounded-[30px] z-1 ">
          <img
            src={Background_Gradient2}
            alt=""
            className="h-[98%] w-full object-cover object-center  rounded-[30px]"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-blurWhiteSecond rounded-[30px] z-2"></div>
        <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[20px] rounded-[30px] z-3"></div>
        <div className="z-4 flex lg:flex-row flex-col justify-between lg:gap-0 md:gap-[24px] gap-[28px] lg:px-[30px] px-3 w-full items-center">
          <div className="flex flex-col gap-3">
            <h3 className="heading lg:text-start">
              Start your 30-day free trial
            </h3>
            <p className="paragraph lg:text-start">
              Ascend simplifies the way you manage your online store, offering a
              user-friendly <br className="lg:block hidden" /> dashboard that
              brings everything into one place.
            </p>
          </div>
          <div>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrail;
