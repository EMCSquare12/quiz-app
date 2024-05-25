import QuestionaireButton from "../components/QuestionaireButton";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Questionaire = ({ callbackQuestions, callbackAnswer, data }) => {
  const [questions, setQuestions] = useState([
    {
      answers: [],
      correctAnswer: "",
      question: "",
    },
  ]);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [letterSelection, setLetterSelection] = useState({
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  });
  const [answers, setAnswers] = useState({
    selectedAnswerIndex: [],
    resultAnswer: [],
    correctAnswerIndex: [],
  });

  useEffect(() => {
    const formattedData = data.map((item) => ({
      answers: shuffleArray([...item.incorrectAnswers, item.correctAnswer]),
      correctAnswer: item.correctAnswer,
      question: item.question,
    }));
    setQuestions(formattedData);
    callbackQuestions(formattedData);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const correctAnswerIndices = questions.map((item) =>
        item.answers.indexOf(item.correctAnswer)
      );
      setAnswers((prevValue) => ({
        ...prevValue,
        correctAnswerIndex: correctAnswerIndices,
      }));
      callbackAnswer((prevValue) => ({
        ...prevValue,
        correctAnswerIndex: correctAnswerIndices,
      }));
    }
  }, [questions]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNext = () => {
    const selectedAnswer = [...answers.selectedAnswerIndex];
    const result = [...answers.resultAnswer];
    const correctAnswerIndex = [...answers.correctAnswerIndex];

    selectedAnswer.push(answerIndex);
    result.push(correctAnswerIndex[counter] === selectedAnswer[counter]);

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      selectedAnswerIndex: selectedAnswer,
      resultAnswer: result,
    }));
    callbackAnswer((prevAnswers) => ({
      ...prevAnswers,
      selectedAnswerIndex: selectedAnswer,
      resultAnswer: result,
    }));

    if (counter < questions.length - 1) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      navigate("/results");
    }
  };

  const handlePreview = () => {
    if (counter < questions.length - 1 && counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="md:w-[60%] h-auto w-full p-8 flex flex-col gap-8 ">
      <h1 className="w-full text-lg font-semibold text-purple-900 font-poppins md:text-2xl">
        {questions[counter].question}
      </h1>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        {questions[counter].answers.map((item, index) => (
          <QuestionaireButton
            key={index}
            letter={letterSelection[index]}
            choice={item}
            selectedAnswer={() => setAnswerIndex(index)}
          />
        ))}
      </div>
      <div className="flex flex-col w-full h-auto gap-2 -mt-4 ">
        <div className="h-4 bg-purple-200 ">
          <div
            style={{
              width: `${((counter + 1) / questions.length) * 100}%`,
            }}
            className="z-10 h-full bg-purple-500"
          ></div>
        </div>
        <h1 className="text-xs font-medium text-purple-900 right-4 top-6 w-fit">
          {counter + 1}/ {questions.length}
        </h1>
      </div>
      <div className="flex flex-row justify-between -mt-4">
        <button
          onClick={handlePreview}
          className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-900 border-2 border-purple-500 font-poppins md:text-base hover:shadow-md hover:shadow-purple-200"
        >
          {counter + 1 === 1 ? null : <IoMdArrowDropleftCircle />}
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`flex flex-row items-center gap-2 px-4 py-2 text-sm font-semibold  border-2 border-purple-500 font-poppins md:text-base hover:shadow-md hover:shadow-purple-200 ${
            counter === questions.length - 1
              ? "bg-purple-900 text-gray-50"
              : "text-purple-900"
          }`}
        >
          {counter === questions.length - 1 ? "Result" : "Next"}
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
export default Questionaire;
