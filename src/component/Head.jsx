import Title from "./Title";

const Head = (props) => {
  return (
    <div className=" py-4 flex flex-col gap-4 items-center lg:w-[630px] md:w-[80%] w-full z-2">
      <Title text={props.title} />
      <h2 className="heading">{props.heading}</h2>
      <p className="paragraph">{props.paragraph}</p>
    </div>
  );
};

export default Head;
