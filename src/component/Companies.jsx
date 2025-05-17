import data from "../constant/data";
const Companies = () => {
  return (
    <section className="mt-8 py-3 flex justify-center">
      <div className="flex flex-col items-center gap-6 md:w-[60%] w-[90%]">
        <p className="text-sm leading-[1.2em] text-white font-sans ">
          Trusted by those companies:
        </p>

        <div className="scroll_animation">
          <ul className=" list-none h-[50px]">
            {data.Company_Logos.map((logo, index) => (
              <li
                key={logo.id}
                className={`${index === 0 ? "" : "ml-[20px]"} inline-block`}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-[60px] w-[100px] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Companies;
