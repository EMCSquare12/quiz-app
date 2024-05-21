import ResultButton from "./ResultButton";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const ResultCard = () => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-white border border-green-500 shadow md:gap-4 md:p-4 shadow-purple-200">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xs font-medium text-purple-900 font-poppins md:text-sm">
          Question 1
        </h1>
        <span className="text-xl text-green-500">
          <FaRegCircleCheck />
        </span>
      </div>
      <ResultButton />
      <ResultButton />
      <ResultButton />
      <ResultButton />
    </div>
  );
};

export default ResultCard;
