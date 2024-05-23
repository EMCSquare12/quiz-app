import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
const ResultButton = ({ letter, choice, questions, answers }) => {
  return (
    <>
      <p className="relative flex flex-row items-center justify-start w-full h-auto gap-2 pr-8 text-xs text-purple-900 bg-white border border-purple-500 cursor-auto md:min-h-10 min-h-8 font-poppins md:text-sm">
        <span className="flex items-center justify-center h-full text-sm font-medium text-white bg-purple-500 md:min-w-10 min-w-8 md:text-base font-poppins">
          {letter}
        </span>
        {choice}
        <span className="absolute text-sm text-purple-500 md:right-4 right-2 w-fit h-fit md:text-lg ">
          <FaRegCircle />
        </span>
      </p>
    </>
  );
};
export default ResultButton;
