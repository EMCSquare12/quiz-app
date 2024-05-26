import { useState } from "react";
import ResultButton from "./ResultButton";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const ResultCard = ({ questions, answers, questionTitle, id }) => {
  const [letterSelection, setLetterSelection] = useState({
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  });
  return (
    <div
      className={`flex flex-col justify-between gap-4 p-2 border  shadow bg-purple-50  md:gap-6 md:p-4 ${
        answers.resultAnswer[id]
          ? "border-green-500 shadow-green-200"
          : "border-red-500 shadow-red-200"
      }`}
    >
      <div className="flex flex-col items-start justify-between h-full gap-4">
        <div className="flex flex-row items-center justify-between gap-2 h-fit">
          <h1 className="text-lg font-bold text-purple-900 font-poppins">
            {`Question ${id + 1}`}
          </h1>
          <span
            className={`mx-2 text-lg  md:text-xl md:mx-4  ${
              answers.resultAnswer[id] ? "text-green-500" : "text-red-500"
            }`}
          >
            {answers.resultAnswer[id] ? <FaCheck /> : <FaXmark />}
          </span>
        </div>
        <p className="text-sm font-medium text-purple-900 font-poppins md:text-base">
          {questionTitle}
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        {questions[id].answers.map((items, index) => (
          <ResultButton
            key={index}
            letter={letterSelection[index]}
            choice={items}
            questions={questions}
            answers={answers}
            id={index}
            length={id}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
