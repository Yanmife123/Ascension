import React from "react";
import { useState } from "react";

const Question = ({ text, heading }) => {
  const [questionClicked, setQuestionClicked] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`bg-blurWhiteSecond py-[13px] px-[12px] flex flex-col w-full rounded-[12px] gap-[14px] `}
      onClick={() => {
        setQuestionClicked((prev) => !prev);
        setTimeout(() => {
          setVisible((prev) => !prev);
        }, 200);
      }}
    >
      <div
        className="flex justify-between items-center
          "
      >
        <h3 className="text-white font-base leading-[1.4em] font-medium font-sans">
          {heading}
        </h3>
        <div className="relative h-[12px] w-[12px] cursor-pointer">
          <div
            className={`w-[2px] h-full absolute top-0 left-[42%] bg-white question_icon  ${
              questionClicked ? "active_question_icon" : ""
            } `}
          ></div>
          <div className="h-[2px] w-full absolute top-[42%] left-0 bg-white"></div>
        </div>
      </div>
      {questionClicked && (
        <p
          className={`text-grey text-base font-medium font-sans leading-[1.4em] ${
            visible ? "opacity-100" : "opacity-0"
          } transition duration-300 `}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Question;
