import { useState, useRef, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

const QuestionaireButton = ({
  letter,
  choice,
  selectedAnswer,
  isClickOutside,
}) => {
  const [isClick, setIsClick] = useState(false);
  const clickRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickRef.current && !clickRef.current.contains(event.target)) {
        setIsClick(false);
        isClickOutside(false);
      }
    };
    if (isClick) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClick]);

  const handleAnswer = (value) => {
    selectedAnswer(value);
    setIsClick(true);
    isClickOutside(true);
  };
  return (
    <>
      <button
        ref={clickRef}
        onClick={handleAnswer}
        className={`relative flex flex-row w-full pr-10 text-left  h-12 border border-purple-500 font-poppins  gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md focus:ring-1 focus:ring-purple-500  hover:shadow-purple-200 ${
          isClick ? "bg-purple-100  " : "bg-white"
        }`}
      >
        <span className="flex items-center justify-center h-full text-lg font-medium text-white bg-purple-500 min-w-12 md:text-xl font-poppins">
          {letter}
        </span>
        {choice}
        <p className="absolute text-base text-purple-500 right-4 w-fit h-fit md:text-xl">
          {isClick ? <FaRegCircleCheck /> : <FaRegCircle />}
        </p>
      </button>
    </>
  );
};
export default QuestionaireButton;