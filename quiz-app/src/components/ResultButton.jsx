import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
const ResultButton = ({ letter, choice, answers, id, length }) => {
  return (
    <>
      <p
        className={`relative flex flex-row items-center justify-start w-full h-auto gap-2 pr-8 text-xs   border  cursor-auto md:pr-12 md:min-h-10 min-h-8 font-poppins md:text-sm ${
          id === answers.correctAnswerIndex[length]
            ? "border-green-500 bg-green-100 text-green-900"
            : id === answers.selectedAnswerIndex[length]
            ? "border-red-500 bg-red-100 text-red-900"
            : "border-purple-500 bg-purple-100 text-purple-900"
        }`}
      >
        <span
          className={`flex items-center justify-center h-full text-sm font-medium text-white  md:min-w-10 min-w-8 md:text-base font-poppins ${
            id === answers.correctAnswerIndex[length]
              ? "bg-green-500"
              : id === answers.selectedAnswerIndex[length]
              ? "bg-red-500"
              : "bg-purple-500"
          }`}
        >
          {letter}
        </span>
        {choice}
        <span
          className={`absolute text-sm  md:right-4 right-2 w-fit h-fit md:text-lg ${
            id === answers.correctAnswerIndex[length]
              ? "text-green-500"
              : id === answers.selectedAnswerIndex[length]
              ? "text-red-500"
              : "text-purple-500"
          }`}
        >
          {id === answers.correctAnswerIndex[length] ? (
            <FaRegCircleCheck />
          ) : id === answers.selectedAnswerIndex[length] ? (
            <FaRegCircleXmark />
          ) : null}
        </span>
      </p>
    </>
  );
};
export default ResultButton;
