import QuestionaireButton from "../components/QuestionaireButton";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

const Questionaire = ({ callbackQuestions, callbackAnswer, data }) => {
  const [questions, setQuestions] = useState([
    {
      answers: [],
      correctAnswer: "",
      question: "",
    },
  ]);
  const [answerIndex, setAnswerIndex] = useState(undefined);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const [isClickOutside, setIsClickOutside] = useState(false);
  const isClickRef = useRef(null);
  const [isClickPreview, setIsClickPreview] = useState(false);
  const previewRef = useRef(null);
  const [answers, setAnswers] = useState({
    selectedAnswerIndex: [],
    resultAnswer: [],
    correctAnswerIndex: [],
  });

  //Get data from data props
  useEffect(() => {
    const formattedData = data.map((item) => ({
      answers: shuffleArray([...item.incorrectAnswers, item.correctAnswer]),
      correctAnswer: item.correctAnswer,
      question: item.question,
    }));
    setQuestions(formattedData);
    callbackQuestions(formattedData);
  }, []);

  //Get all indeces of correct answer
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

  //Set Value of answerIndex if isClickOutside props is true, else return answerIndex value
  useEffect(() => {
    if (isClickRef.current || previewRef.current) {
      return;
    } else {
      setAnswerIndex(isClickOutside ? answerIndex : undefined);
    }
  }, [isClickOutside]);

  // set IsClickPreview value to false if its click outside its component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setIsClickPreview(false);
      }
    };
    if (isClickPreview) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClickPreview]);

  //Shuffle all answer selection
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  //onclick function for Next button
  const handleNext = () => {
    // Copies of object of arrays of answer
    const selectedAnswer = [...answers.selectedAnswerIndex];
    const result = [...answers.resultAnswer];
    const correctAnswerIndex = [...answers.correctAnswerIndex];
    if (counter < questions.length - 1) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      navigate("/results");
    }

    if (selectedAnswer.length < questions.length) {
      if (counter < selectedAnswer.length) {
        selectedAnswer[counter] = answerIndex;
        result[counter] = correctAnswerIndex[counter] === answerIndex;
      } else {
        selectedAnswer.push(answerIndex);
        result.push(correctAnswerIndex[counter] === answerIndex);
      }
    }

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

    setAnswerIndex(selectedAnswer[counter + 1]);

    console.log(selectedAnswer);
  };

  // onDoubleClick function for Preview Button
  const handleDoubleClickPreview = () => {
    if (counter < questions.length && counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  //onClick function for List in Preview Button
  const handlePreviewList = (index) => {
    setCounter(index);
    console.log(index);

    setIsClickPreview(false);
  };

  //Letter Selection for question
  const letterSelection = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  console.log(answerIndex);
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-purple-900 font-poppins md:text-6xl">
          MindMaze
        </h1>
      </div>
      <div className="md:w-[60%]  h-full w-full md:p-8 p-4 flex flex-col md:gap-8 gap-4 justify-center  items-center">
        <h1 className="w-full text-lg font-bold text-purple-900 font-poppins md:text-2xl">{`Question ${
          counter + 1
        }`}</h1>
        <p className="w-full -mb-0 text-base font-semibold text-purple-900 md:-mb-4 font-poppins md:text-xl">
          {questions[counter].question}
        </p>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          {questions[counter].answers.map((item, index) => (
            <QuestionaireButton
              key={index}
              letter={letterSelection[index]}
              choice={item}
              selectedAnswer={() => setAnswerIndex(index)}
              isClickOutside={(value) => setIsClickOutside(value)}
              btnIndex={
                isClickOutside === false
                  ? answers.selectedAnswerIndex[counter] === index
                  : false
              }
            />
          ))}
        </div>
        <div className="flex flex-col items-end w-full h-auto gap-2 md:-mt-4 ">
          <div className="relative w-full h-4 bg-purple-200">
            <div
              style={{
                width: `${
                  (answers.selectedAnswerIndex.length / questions.length) * 100
                }%`,
              }}
              className="absolute z-10 h-full bg-purple-400"
            ></div>
            <div
              style={{
                width: `${((counter + 1) / questions.length) * 100}%`,
              }}
              className="absolute z-10 h-full bg-purple-600"
            ></div>
          </div>
          <h1 className="text-xs font-medium text-purple-900 md:text-sm w-fit">
            {counter + 1}/ {questions.length}
          </h1>
        </div>
        <div className="flex flex-row justify-between w-full md:-mt-4">
          <div ref={previewRef} className="relative">
            {isClickPreview && answers.selectedAnswerIndex.length > 0 ? (
              <ul className="absolute bottom-[100%] flex flex-col-reverse w-40 max-h-[200px] overflow-y-auto z-10">
                {answers.selectedAnswerIndex.map((_, index) => (
                  <li
                    ref={isClickRef}
                    key={index}
                    onClick={() => handlePreviewList(index)}
                    className="flex flex-row items-center justify-between w-auto gap-2 px-4 py-2 text-sm font-semibold text-purple-900 border border-purple-200 shadow bg-purple-50 shadow-purple-200 font-poppins md:text-sm hover:bg-purple-200"
                  >
                    {`Question ${index + 1}`}{" "}
                    <span>
                      {answers.selectedAnswerIndex[index] !== undefined ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaRegCircle className="text-purple-900" />
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <button
              ref={isClickRef}
              onClick={() => setIsClickPreview(!isClickPreview)}
              onDoubleClick={handleDoubleClickPreview}
              className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-900 border-2 border-purple-500 font-poppins md:text-base hover:shadow-md hover:shadow-purple-200"
            >
              {counter + 1 === 1 ? null : <IoMdArrowDropleftCircle />}
              Previous
            </button>
          </div>
          <button
            ref={isClickRef}
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
    </div>
  );
};
export default Questionaire;
