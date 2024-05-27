import { useState, useEffect, useRef } from "react";
import quizOption from "../components/quizOption";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const HomePage = ({ callBackData }) => {
  const [difficulty, setDifficulty] = useState(quizOption.difficulties[0]);
  const [category, setCategory] = useState(quizOption.categories[0]);
  const [categories, setCategories] = useState([category]);
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const listRef = useRef(null);

  const handleCategoryOnclick = (category) => {
    const categoriesCopy = [...categories];

    if (categoriesCopy.includes(category)) {
      const updatedCategories = categoriesCopy.filter(
        (item) => item !== category
      );
      setCategories(updatedCategories);
    } else {
      setCategories([...categoriesCopy, category]);
    }

    setCategory(category);
  };

  const handleStartGame = () => {
    if (categories.length !== 0) {
      navigate("/questionaire");
    } else {
      setIsShow(true);
    }
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const params = {
          limit: 10,
          difficulty: difficulty,
          categories: formatCategories(categories),
        };
        const url = "https://the-trivia-api.com/api/questions";
        const response = await axios.get(url, { params });
        const data = response.data;
        callBackData(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchQuestions();
  }, [category, difficulty]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShow(false);
      clearInterval(intervalId);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isShow]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const textUpperCase = (text) => {
    return text
      .split("_")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")
      .replace(/ And /g, " and ");
  };

  const formatCategories = (array) => {
    if (array.length === 0) {
      return;
    }
    return array.join(",");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 p-4 md:gap-8">
      <h1 className="text-xl font-bold text-purple-900 font-poppins md:text-4xl">
        MindMaze
      </h1>
      <div className="flex md:flex-row flex-col w-full h-auto  border border-purple-200 shadow bg-gray-50 md:w-[70%] shadow-purple-200">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center w-full h-auto gap-4 p-4 border-b border-purple-200 justify-Start md:p-12">
            <h1 className="text-sm font-bold text-purple-900 font-poppins md:text-base">
              Difficulties:
            </h1>
            <div ref={listRef} className="relative flex flex-wrap gap-4 ">
              {width > 768 &&
                quizOption.difficulties.map((item, index) => (
                  <button
                    onClick={() => setDifficulty(item)}
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
                    onClick={() => setIsOpen(!isOpen)}
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
                          onClick={() => setDifficulty(item)}
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
          <div className="flex flex-col justify-between h-full p-4 bg-gray-50 md:p-12">
            <h1 className="text-sm font-bold text-purple-900 font-poppins h-fit w-fit md:text-base">
              Categories:
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-6">
              {quizOption.categories.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleCategoryOnclick(item)}
                    className={`px-4 py-2 text-sm font-semibold flex flex-col text-purple-600 bg-purple-100 font-poppins md:text-base  ${
                      categories.includes(item)
                        ? "bg-purple-300 text-purple-900"
                        : "hover:bg-purple-200"
                    }`}
                  >
                    {textUpperCase(item)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full  bg-purple-100 md:border-l border-l-transparent md:border-t-transparent border-t border-purple-200 gap-8 flex flex-col h-full p-4 md:p-12">
          <div className="flex flex-col justify-between h-full gap-3 md:gap-8">
            {width > 768 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <h1 className="text-xs font-bold text-purple-900 font-poppins md:text-base">
                    Difficulty:
                  </h1>
                  <h2 className="text-xs font-bold text-purple-600 md:text-base font-poppins">
                    {textUpperCase(difficulty)}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-xs font-bold text-purple-900 font-poppins md:text-base">
                    Category:
                  </h1>
                  <div className="flex flex-row flex-wrap gap-2">
                    {categories.map((item, index) => (
                      <h2
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-200 md:text-xs font-poppins w-fit"
                      >
                        {textUpperCase(item)}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4">
              {isShow === true && (
                <p className="-mb-2 text-sm font-medium text-red-500">
                  {categories.length === 0 ? "Please select Category" : ""}
                </p>
              )}
              <button
                onClick={handleStartGame}
                className="w-full h-auto py-3 text-base font-bold bg-purple-900 text-gray-50 font-poppins hover:bg-purple-700"
              >
                Let's Play
              </button>
              <button
                onClick={() => setCategories([])}
                className="w-full h-auto p-3 text-base font-bold text-purple-900 bg-purple-300 font-poppins hover:bg-purple-400"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
