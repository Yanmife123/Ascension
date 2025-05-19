import { Benefit1, Benefit2, Benefit3, Benefit4 } from "../assets";
import Head from "./Head";

const Benefit = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="benefit"
    >
      <div className="section_gradient_container">
        <div className="ellpise2" />
        <div className="ellpise1" />
      </div>

      <Head
        title={"Benefits"}
        heading={"Unlock Your Store's Potential"}
        paragraph={
          "From automating tasks to offering real-time insights, Ascension takes the complexity out of running your business. Here’s how it works:"
        }
      />
      <div className="flex flex-col gap-4 items-center z-2">
        <div className="flex lg:flex-row flex-col gap-4 w-[80%]">
          <div className="flex py-5 px-3 bg-blurWhite flex-col gap-5 rounded-[5px]">
            <div className="flex justify-center">
              <img src={Benefit1} alt="Benefit" srcset="" className="h-[95%]" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <h4
                className="font-satoshi text-[20px] leading-[1.2em]
                text-white font-medium
                "
              >
                Sales Overview
              </h4>
              <p className="text-grey text-sm  font-sans font-normal leading-[1.4em] ">
                View real-time sales updates in an instant. Monitor top-selling
                items and track sales performance to stay on top of your revenue
                goals.
              </p>
            </div>
          </div>
          <div className="flex py-5 px-3 bg-blurWhite flex-col gap-5 rounded-[5px]">
            <div className="flex justify-center">
              <img src={Benefit2} alt="Benefit" srcset="" className="h-[95%]" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <h4
                className="font-satoshi text-[20px] leading-[1.2em]
                text-white font-medium
                "
              >
                Inventory Snapshot
              </h4>
              <p className="text-grey text-sm  font-sans font-normal leading-[1.4em] ">
                Easily track inventory across multiple stores to ensure you're
                always stocked on high-demand products.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-[80%]">
          <div className="flex py-5 px-3 bg-blurWhite flex-col gap-9 rounded-[5px] justify-center">
            <div className="flex justify-center items-center">
              <img src={Benefit3} alt="Benefit" srcset="" className="h-[95%]" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <h4
                className="font-satoshi text-[20px] leading-[1.2em]
                text-white font-medium
                "
              >
                Integrations Hub
              </h4>
              <p className="text-grey text-sm  font-sans font-normal leading-[1.4em] ">
                Sync your sales, automate workflows, and manage customer data
                across all your favorite tools effortlessly.
              </p>
            </div>
          </div>
          <div className="flex py-5 px-3 bg-blurWhite flex-col gap-5 rounded-[5px]">
            <div className="flex justify-center">
              <img src={Benefit4} alt="Benefit" srcset="" className="h-[90%]" />
            </div>
            <div className="flex flex-col gap-[9px]">
              <h4
                className="font-satoshi text-[20px] leading-[1.2em]
                text-white font-medium
                "
              >
                Customer Engagement Tools
              </h4>
              <p className="text-grey text-sm  font-sans font-normal leading-[1.4em] ">
                Reach out to your customers with targeted messaging, special
                promotions, or newsletters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
