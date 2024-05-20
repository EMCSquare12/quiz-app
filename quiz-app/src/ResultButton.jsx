import { FaRegCircleXmark } from "react-icons/fa6";
const ResultButton = () => {
  return (
    <>
      <button className="relative flex flex-row w-full md:min-h-10 min-h-8 h-auto border border-purple-500 font-poppins pr-8  gap-2 items-center justify-start md:text-sm text-xs text-purple-900 bg-white">
        <span className="md:min-w-10 min-w-8 h-full flex items-center justify-center bg-purple-500 md:text-base text-sm font-medium font-poppins text-white">
          A
        </span>
        Result
        <span className="absolute right-2 w-fit h-fit md:text-sm text-sm text-purple-500">
          <FaRegCircleXmark />
        </span>
      </button>
    </>
  );
};
export default ResultButton;
