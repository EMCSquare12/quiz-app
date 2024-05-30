import quizOption from "./quizOption";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Difficulties = ({ onDifficulty, width, isOpen, listRef, onIsOpen }) => {
  const [difficulty, setDifficulty] = useState(quizOption.difficulties[0]);

    //Transform the first letter of text toUpperCase, and toLowerCase for AND word
  const textUpperCase = (text) => {
    return text
      .split("_")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")
      .replace(/ And /g, " and ");
  };

  const handleDifficulty = (value) => {
    setDifficulty(value);
    onDifficulty(value);//callback function for Difficulty
  };
  return (
    <div className="flex items-center w-full h-auto gap-4 p-4 border-b border-purple-200 justify-Start md:p-12">
      <h1 className="text-sm font-bold text-purple-900 font-poppins md:text-base">
        Difficulties:
      </h1>
      <div ref={listRef} className="relative flex flex-wrap gap-4 ">
        {width > 768 &&
          quizOption.difficulties.map((item, index) => (
            <button
              onClick={() => handleDifficulty(item)}
              key={index}
              className={`px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-100 font-poppins md:text-base  ${
                difficulty === item
                  ? "bg-purple-300 text-purple-900"
                  : "hover:bg-purple-200"
              }`}
            >
              {textUpperCase(item)}
            </button>
          ))}
        {width < 768 && (
          <>
            <button
              type="text"
              className="flex flex-row items-center justify-between px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-100 w-28 font-poppins md:text-base"
              readOnly
              onClick={() => onIsOpen(!isOpen)}
            >
              {textUpperCase(difficulty)}{" "}
              <span className="text-xs">
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {isOpen && (
              <ul className="absolute top-[100%] z-20 w-28  shadow shadow-purple-200 border border-purple-200">
                {quizOption.difficulties.map((item, index) => (
                  <li
                    onClick={() => onDifficulty(item)}
                    key={index}
                    className={`px-4 py-2 text-sm font-semibold text-purple-600 bg-gray-50 font-poppins md:text-base  ${
                      difficulty === item
                        ? "bg-purple-300 text-purple-900"
                        : "hover:bg-purple-200"
                    }`}
                  >
                    {textUpperCase(item)}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Difficulties;
