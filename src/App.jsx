import {
  Navbar,
  Hero,
  Companies,
  Works,
  Benefit,
  Benefit_secound,
  FreeTrail,
  Feature,
  Pricing,
  Testomonail,
  Faq,
  Final,
  Footer,
} from "./component";

const App = () => {
  return (
    <div className=" bg-black overflow-hidden ">
      <div className="purple___gradient " />
      <header className="flex__center  paddingX fixed top-0 left-0 w-full py-4  lg:border-b-0 border-b-1  border-b-blurWhite lg:bg-transparent bg-blurBlack backdrop-blur-[10px] z-5 ">
        <Navbar />
      </header>

      <div className="flex__center paddingX try mt-[80px]">
        <div className="boxWidth">
          <Hero />
          <Companies />
          <Works />
          <Benefit />
          <Benefit_secound />
          <FreeTrail />
          <Feature />
          <Pricing />
          <Testomonail />
          <Faq />
          <Final />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
