import QuestionaireButton from "./QuestionaireButton";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Questionaire = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [letterSelection, setLetterSelection] = useState({
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  });
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = "https://opentdb.com/api.php";
      const params = {
        amount: 10,
        category: 18, // Science: Computers
        difficulty: "medium",
        type: "multiple",
      };

      try {
        const response = await axios.get(url, { params });
        const data = response.data.results;
        console.log(data)

        const formattedData = data.map((item) => ({
          question: item.question,
          correctAnswer: item.correct_answer,
          answers: shuffleArray([
            ...item.incorrect_answers,
            item.correct_answer,
          ]),
        }));

        setQuestions(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  console.log(questions);

  const handleNext = () => {
    if (counter < questions.length - 1) {
      setCounter((counter) => counter + 1);
    } else {
      navigate("/results");
    }
    console.log(counter);
  };

  return (
    <div className="md:w-[60%] h-auto w-full p-8 flex flex-col gap-8 ">
      <h1
        dangerouslySetInnerHTML={{ __html: questions.question[counter] }}
        className="w-full text-lg font-semibold text-purple-900 font-poppins md:text-2xl"
      ></h1>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        {questions.answers[counter].map((item, index) => (
          <QuestionaireButton
            key={index}
            letter={letterSelection[index]}
            choice={item}
          />
        ))}
      </div>
      <div className="flex flex-col w-full h-auto gap-2 -mt-4 ">
        <div className="h-4 bg-purple-200 ">
          <div
            style={{
              width: `${((counter + 1) / questions.length) * 100}%`,
            }}
            className="z-10 h-full bg-purple-500"
          ></div>
        </div>
        <h1 className="text-xs font-medium text-purple-900 right-4 top-6 w-fit">
          {counter + 1}/ {questions.length}
        </h1>
      </div>
      <div className="flex flex-row justify-between -mt-4">
        <button className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-900 border-2 border-purple-500 font-poppins md:text-base hover:shadow-md hover:shadow-purple-200">
          {counter + 1 === 1 ? null : <IoMdArrowDropleftCircle />}
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-900 border-2 border-purple-500 font-poppins md:text-base hover:shadow-md hover:shadow-purple-200"
        >
          {counter === questions.length - 1 ? "Result" : "Next"}
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
export default Questionaire;
