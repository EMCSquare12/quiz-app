import { useState, useRef, useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

const QuestionaireButton = ({ letter, choice }) => {
  const [isClick, setIsClick] = useState(false);
  const iconRef = useRef(null);

  const handleClickOutside = (event) => {
    if (iconRef.current && !iconRef.current.contains(event.target)) {
      setIsClick(false);
    }
  };
  useEffect(() => {
    if (isClick) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClick]);
  return (
    <>
      <button
        ref={iconRef}
        onClick={() => setIsClick(!isClick)}
        className={`relative flex flex-row w-full  h-12 border border-purple-500 font-poppins  gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md focus:ring-1 focus:ring-purple-500  hover:shadow-purple-200 ${
          isClick ? "bg-purple-100  " : "bg-white"
        }`}
      >
        <span className="flex items-center justify-center w-12 h-full text-lg font-medium text-white bg-purple-500 md:text-xl font-poppins">
          {letter}
        </span>
        {choice}
        <span className="absolute text-base text-purple-500 right-4 w-fit h-fit md:text-xl">
          {isClick ? <FaRegCircleCheck /> : <FaRegCircle />}
        </span>
      </button>
    </>
  );
};
export default QuestionaireButton;
