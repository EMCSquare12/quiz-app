import { useState } from "react";
import ResultCard from "../components/ResultCard";
import Header from "../components/Header";

const ScoreResult = ({ questions, answers }) => {
  const countCorrectAnswer = () => {
    const correctAnswer = answers.resultAnswer.filter(
      (item) => item === true
    ).length;

    return correctAnswer;
  };
  console.log(questions);
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="mt-12 ">
        <h1 className="text-4xl font-bold text-purple-900 font-poppins md:text-6xl">
          MindMaze
        </h1>
      </div>
      <div className="md:w-[80%] h-auto w-full md:p-8 p-4 flex flex-col gap-8  items-center ">
        <h1 className="mb-4 text-xl font-bold text-purple-900 font-poppins md:text-2xl w-fit">
          {`Score: ${countCorrectAnswer()}/${questions.length}`}
        </h1>
        <div className="grid w-full h-auto grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          {questions.map((items, index) => (
            <ResultCard
              key={index}
              questions={questions}
              answers={answers}
              questionTitle={items.question}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ScoreResult;
