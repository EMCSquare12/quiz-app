import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

const Questionaire = () => {
  return (
    <div className="md:w-[60%] h-auto w-full p-8 flex flex-col gap-8 ">
      <div className="font-poppins font-semibold md:text-2xl text-lg text-purple-900">
        Sample Question Here
      </div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <button className="relative flex flex-row w-full h-12 border border-green-500 font-poppins bg-white gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md  hover:shadow-purple-200">
          <span className="w-12 h-full flex items-center justify-center bg-green-500 md:text-xl text-lg font-medium font-poppins text-white">
            A
          </span>
          Choice A
          <span className="absolute right-4 w-fit h-fit md:text-lg text-base text-green-500">
            <FaRegCircleCheck />
          </span>
        </button>
        <button className="relative flex flex-row w-full h-12 border border-red-500 font-poppins bg-white gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md  hover:shadow-purple-200">
          <span className="w-12 h-full flex items-center justify-center bg-red-500 md:text-xl text-lg font-medium font-poppins text-white">
            B
          </span>
          Choice B
          <span className="absolute right-4 w-fit h-fit md:text-lg text-base text-red-500">
            <FaRegCircleXmark />
          </span>
        </button>
        <button className="relative flex flex-row w-full h-12 border border-purple-500 font-poppins bg-white gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md  hover:shadow-purple-200">
          <span className="w-12 h-full flex items-center justify-center bg-purple-500 md:text-xl text-lg font-medium font-poppins text-white">
            C
          </span>
          Choice C
          <span className="absolute right-4 w-fit h-fit md:text-lg text-base text-purple-500">
            <FaRegCircle />
          </span>
        </button>
        <button className="relative flex flex-row w-full h-12 border border-purple-500 font-poppins bg-white gap-4 items-center md:text-base text-sm text-purple-900 hover:shadow-md  hover:shadow-purple-200">
          <span className="w-12 h-full flex items-center justify-center bg-purple-500 md:text-xl text-lg font-medium font-poppins text-white">
            D
          </span>
          Choice D
          <span className="absolute right-4 w-fit h-fit md:text-lg text-base text-purple-500">
            <FaRegCircle />
          </span>
        </button>
      </div>
      <div className="-mt-4 w-full h-auto flex flex-col gap-2">
        <div className="h-4 bg-purple-200 ">
          <div className="w-[10%] h-full bg-purple-500 z-10"></div>
        </div>
        <h1 className="text-xs text-purple-900 font-medium">1/10</h1>
      </div>
    </div>
  );
};
export default Questionaire;
