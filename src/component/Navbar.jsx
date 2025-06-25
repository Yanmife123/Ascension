import { useState } from "react";

import data from "../constant/data";
import { Logo } from "../assets";
import { motion } from "motion/react";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="w-full boxWidth ">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          ease: "easeIn",
          duration: 0.5,
        }}
        className={`flex items-center justify-between text-white w-full md:h-[60px] h-[50px] `}
      >
        <div>
          <a href="#hero">
            <img src={Logo} alt="Logo" className="z-2" />
          </a>
        </div>
        <ul className="list-none  gap-6  lg:flex hidden">
          {data.Navbar_Data.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.link}`}
                className="text-inherit font-satoshi nav_link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:block hidden">
          <a
            href="#"
            className="py-3 px-8 text-black bg-white font-sans font-normal rounded-[48px] get_started_btn"
          >
            Get Started
          </a>
        </div>
        <div
          className=" lg:hidden block menu w-[40px] h-[40px] relative cursor-pointer z-[2] "
          onClick={() => {
            setMenuClicked((prev) => !prev);
          }}
        >
          <div
            className={`menu_up  ${
              menuClicked
                ? "top-[calc(50%)] rotate-[-20deg]"
                : " top-[calc(37.5%)]"
            }`}
          ></div>
          <div
            className={` menu_up     ${
              menuClicked
                ? "top-[calc(50%)] rotate-[20deg]"
                : " top-[calc(62.5%)]"
            }`}
          ></div>
        </div>
      </motion.nav>
      <nav
        className={` mt-10  lg:hidden block navPhone ${
          menuClicked ? "block" : "hidden"
        } w-full h-[300px] pt-5`}
      >
        <ul className="flex flex-col gap-2 ">
          {data.Navbar_Data.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.link}`}
                className=" font-satoshi nav_link  text-[18px] text-white"
                onClick={() => {
                  setMenuClicked(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 w-100%">
          <button className="bg-white py-3 w-full text-black font-sans block text-center rounded-[20px] ">
            {" "}
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
