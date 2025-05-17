import Title from "./Title";

const Pricing = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="pricing"
    >
      <div className=" py-4 flex flex-col gap-4 items-center lg:w-[630px] md:w-[80%] w-full z-2">
        <Title text={"Pricing"} />
        <h2 className="heading">Pricing that makes sense</h2>
        <p className="paragraph">
          Each package comes with essential features to keep your store running
          smoothly, find the right plan for your business.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
