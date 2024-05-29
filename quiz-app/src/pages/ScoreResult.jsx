import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const ScoreResult = ({ questions, answers }) => {
  const [scoreMessage, setScoreMessage] = useState("");
  const navigate = useNavigate();
  const countCorrectAnswer = () => {
    const correctAnswer = answers.resultAnswer.filter(
      (item) => item === true
    ).length;

    return correctAnswer;
  };
  useEffect(() => {
    let message;

    switch (true) {
      case countCorrectAnswer() === 10:
        message = "Outstanding";
        break;
      case countCorrectAnswer() >= 7:
        message = "Excellent";
        break;
      case countCorrectAnswer() >= 5:
        message = "Good Job";
        break;
      default:
        message = "Well Played";
    }

    setScoreMessage(message);
  }, []);

  const handlePlayAgain = () => {
    navigate("/");
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
        <div className="flex flex-row gap-5 mt-8">
          <h1 className="text-xl font-bold text-purple-900 font-poppins md:text-4xl w-fit">
            {`Score: ${countCorrectAnswer()}/${questions.length}`}
          </h1>
          <div className="h-full w-[2px] bg-purple-900"></div>
          <h2 className="text-xl font-bold text-purple-900 font-poppins md:text-4xl w-fit">
            {scoreMessage}
          </h2>
        </div>
        <button
          onClick={handlePlayAgain}
          className="h-auto px-5 py-3 text-sm font-bold bg-purple-900 md:text-base w-fit text-gray-50 font-poppins hover:bg-purple-700"
        >
          Play Again?
        </button>
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
