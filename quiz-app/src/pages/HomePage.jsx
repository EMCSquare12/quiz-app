import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ky from "ky";
import Difficulties from "../components/Difficulties";
import Categories from "../components/Categories";
import quizOption from "../components/quizOption";
import PlayGameDashboard from "../components/PlayGameDashboard";

const HomePage = ({ callBackData }) => {
  const [difficulty, setDifficulty] = useState(quizOption.difficulties[0]);
  const [category, setCategory] = useState(quizOption.categories[0]);
  const [categories, setCategories] = useState([category]);
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef(null);

  //Fetch Data from the-trivia-api.com
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const searchParams = {
          limit: 10,
          difficulty: difficulty,
          categories: categories,
        };
        const url = "https://the-trivia-api.com/api/questions";
        const response = await ky.get(url, { searchParams }).json();
        console.log(response);

        callBackData(response); //callback funtion that will be used in Questionaire.jsx

        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  //To display message if categories is empty array
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShow(false);
      clearInterval(intervalId);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isShow]);

  //Track the width of screen
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  //Close the drop down list when click outside of its component
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

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 p-4 md:gap-8">
      <h1 className="text-xl font-bold text-purple-900 font-poppins md:text-4xl">
        MindMaze
      </h1>
      <div className="flex md:flex-row flex-col w-full h-auto  border border-purple-200 shadow bg-gray-50 md:w-[70%] shadow-purple-200">
        <div className="flex flex-col w-full h-full">
          <Difficulties
            onDifficulty={(value) => setDifficulty(value)}
            width={width}
            isOpen={isOpen}
            listRef={listRef}
            onIsOpen={(value) => setIsOpen(value)}
          />
          <Categories
            onCategory={(value) => setCategory(value)}
            onCategories={(value) => setCategories(value)}
          />
        </div>
        <div className="md:w-[50%] w-full  bg-purple-100 md:border-l border-l-transparent md:border-t-transparent border-t border-purple-200 gap-8 flex flex-col h-full p-4 md:p-12">
          <PlayGameDashboard
            width={width}
            isShow={isShow}
            ononIsShow={(value) => setIsShow(value)}
            difficulty={difficulty}
            categories={categories}
            onCategories={(value) => setCategories(value)}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
