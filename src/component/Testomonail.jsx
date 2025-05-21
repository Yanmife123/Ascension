import data from "../constant/data";
import Head from "./Head";
import { Carousel } from "primereact/carousel";

const Testomonial_componenet = ({ text, img, name, profession }) => {
  return (
    <div className="py-[15px] px-[20px] h-[200px] bg-blurWhiteSecond rounded-[12px]">
      <div className="flex flex-col justify-between h-full">
        <div className="text-white text-base font-sans leading-[1.4em]">
          {text}
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <img
              src={img}
              alt=""
              className="h-[36px] w-[36px] rounded-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <h3 className="text-white font-sans text-base leading-[1.4em] font-semibold">
              {name}
            </h3>
            <div className="text-grey font-sans opacity-[0.8] text-sm leading-[1.4em]">
              {profession}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testomonail = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="testomonials"
    >
      <Head
        title={"Testomonials"}
        heading={"Don’t take our word for it"}
        paragraph={
          "From automating tasks to offering real-time insights, Ascension takes the complexity out of running your business. Here’s how it works:"
        }
      />
      <div className="w-full h-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] w-full">
          {data.Testomonials.map((testomonial) => (
            <Testomonial_componenet key={testomonial.id} {...testomonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testomonail;
