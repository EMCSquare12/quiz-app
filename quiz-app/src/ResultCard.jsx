import { useState } from "react";
import ResultButton from "./ResultButton";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const ResultCard = ({ questions, answers, questionTitle, id }) => {
  const [letterSelection, setLetterSelection] = useState({
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  });
  return (
    <div
      className={`flex flex-col justify-center gap-2 p-2 bg-white border  shadow md:gap-4 md:p-4  ${
        answers.resultAnswer[id] ? "border-green-500 shadow-green-200" : "border-red-500 shadow-red-200"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-sm font-medium text-purple-900 font-poppins md:text-base">
          {questionTitle}
        </h1>
        <span
          className={`mx-2 text-sm  md:text-lg md:mx-4 ${
            answers.resultAnswer[id] ? "text-green-500" : "text-red-500"
          }`}
        >
          {answers.resultAnswer[id] ? (
            <FaRegCircleCheck />
          ) : (
            <FaRegCircleXmark />
          )}
        </span>
      </div>

      {questions[id].answers.map((items, index) => (
        <ResultButton
          key={index}
          letter={letterSelection[index]}
          choice={items}
          questions={questions}
          answers={answers}
        />
      ))}
    </div>
  );
};

export default ResultCard;
