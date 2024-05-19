import QuestionaireButton from "./QuestionaireButton";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Questionaire = () => {
  return (
    <div className="md:w-[60%] h-auto w-full p-8 flex flex-col gap-8 ">
      <div className="font-poppins w-full font-semibold md:text-2xl text-lg text-purple-900">
        Sample Question Here
      </div>
      <div className="flex flex-col w-full gap-4 justify-start items-start">
        <QuestionaireButton letter={"A"} choice={"Choice A"} />
        <QuestionaireButton letter={"B"} choice={"Choice B"} />
        <QuestionaireButton letter={"C"} choice={"Choice C"} />
        <QuestionaireButton letter={"D"} choice={"Choice D"} />
      </div>
      <div className=" -mt-4 w-full h-auto flex flex-col gap-2">
        <div className="h-4 bg-purple-200 ">
          <div className="w-[10%] h-full bg-purple-500 z-10"></div>
        </div>
        <h1 className=" right-4 top-6 text-xs text-purple-900 font-medium w-fit">
          1/10
        </h1>
      </div>
      <div className="flex flex-row justify-between -mt-4">
        <button className="flex flex-row gap-2 items-center  px-4 py-2 border-2 border-purple-500 font-poppins font-semibold md:text-base text-sm text-purple-900 hover:shadow-md   hover:shadow-purple-200">
          <IoMdArrowDropleftCircle />
          previous
        </button>
        <button className="flex flex-row gap-2 items-center px-4 py-2 border-2 border-purple-500 font-poppins font-semibold md:text-base text-sm text-purple-900 hover:shadow-md   hover:shadow-purple-200">
          next
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
export default Questionaire;
