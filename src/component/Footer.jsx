import { Logo } from "../assets";
import data from "../constant/data";

const Footer = () => {
  return (
    <footer className="mt-9 bg-[#03010A] pt-[100px] md:px-[100px] px-[32px] pb-[50px] border-1 border-blurWhite z-3 mix-blend-difference">
      <div className="flex flex-col gap-[50px]">
        <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-[48px] w-full">
          <div className="flex flex-col gap-[30px]">
            <img src={Logo} alt="" className="h-[20px] w-[175px]" />
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-satoshi text-[20px] leading-[1.2rem] tracking-tight font-medium">
                Join our newsletter
              </h3>
              <p className="text-grey text-sm leading-[1.4em]font-sans ">
                Get the latest updates, tips, and offers directly to your inbox.
              </p>
            </div>
            <div className="flex">
              <form
                action=""
                className="flex md:gap-[9px] gap-[15px] items-center md:flex-row flex-col md:w-auto w-full"
              >
                <div className="md:w-auto w-full">
                  <input
                    type="text"
                    className="py-[12px] px-[32px]  text-white placeholder:text-[#999999] bg-blurWhiteSecond rounded-[22px] outline-0 border-1 border-blurWhite md:w-auto w-full "
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="md:w-auto w-full">
                  <button className="py-3 px-8 bg-white text-black font-sans font-normal rounded-[48px] get_started_btn md:w-auto w-full">
                    Subcribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-[50px]">
            <div className="flex  flex-col gap-[24px]">
              <div className="font-sans text-white font-medium leading-[1.4em] ">
                Sections
              </div>
              <ul className="flex flex-col gap-[12px]">
                {data.Navbar_Data.map((data) => (
                  <li key={data.id}>
                    <a
                      href={`#${data.link}`}
                      className="text-grey font-satoshi nav_link"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="font-sans text-white font-medium leading-[1.4em] ">
                Information
              </div>
              <ul className="flex flex-col gap-[12px]">
                <li>
                  <a href="#faq" className="text-grey font-satoshi nav_link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-grey font-satoshi nav_link">
                    404
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 border-t-1 border-blurWhite">
          <p className="mt-7 font-sans text-sm text-grey md:text-start text-center">
            Built by Yanmife Adegbola @yanmifeigwegmail.com using React.js
          </p>
          <p
            className="mt-5 font-sans text-sm text-grey md:text-start text-center
          "
          >
            Desgined Made by Josiah Bhanghoyer. giveing credit to Josiah
            Bhanghoyer for allowing me use this desgin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
