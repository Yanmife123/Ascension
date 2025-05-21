import Question from "./question";

import Head from "./Head";
import data from "../constant/data";
const Faq = () => {
  return (
    <section
      className="paddingY mt-5 flex flex-col items-center gap-[78px]  relative"
      id="features"
    >
      <Head
        title={"FAQ"}
        heading={"Frequently Asked Quesions"}
        paragraph={"Still have questions? We've got answers."}
      />
      <div className="flex flex-col lg:w-[80%] w-full gap-4">
        {data.questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
