import QuestionaireButton from "./QuestionaireButton";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Questionaire = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
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
      try {
        const { data } = await axios.get(
          "https://opentdb.com/api.php?amount=10"
        );
        setQuestions(data.results);
        console.log(data.results);

        if (data.results.length > 0) {
          const answerList = [
            ...data.results[counter].incorrect_answers,
            data.results[counter].correct_answer,
          ];
          setAnswers(answerList);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [counter]);

  const handleNext = () => {
    if (counter < questions.length - 1) {
      setCounter((counter) => counter + 1);
    } else {
      navigate("/results");
    }
    console.log(counter);
  };

  console.log(questions);
  console.log(answers);

  return (
    <div className="md:w-[60%] h-auto w-full p-8 flex flex-col gap-8 ">
      {/* <h1
        dangerouslySetInnerHTML={{ __html: questions[counter].question }}
        className="font-poppins w-full font-semibold md:text-2xl text-lg text-purple-900"
      ></h1> */}
      <div className="flex flex-col w-full gap-4 justify-start items-start">
        {answers.map((item, index) => (
          <QuestionaireButton
            key={index}
            letter={letterSelection[index]}
            choice={item}
          />
        ))}
      </div>
      <div className=" -mt-4 w-full h-auto flex flex-col gap-2">
        <div className="h-4 bg-purple-200 ">
          <div
            style={{
              width: `${((counter + 1) / questions.length) * 100}%`,
            }}
            className="h-full bg-purple-500 z-10"
          ></div>
        </div>
        <h1 className=" right-4 top-6 text-xs text-purple-900 font-medium w-fit">
          {counter + 1}/ {questions.length}
        </h1>
      </div>
      <div className="flex flex-row justify-between -mt-4">
        <button className="flex flex-row gap-2 items-center  px-4 py-2 border-2 border-purple-500 font-poppins font-semibold md:text-base text-sm text-purple-900 hover:shadow-md   hover:shadow-purple-200">
          {counter + 1 === 1 ? null : <IoMdArrowDropleftCircle />}
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex flex-row gap-2 items-center px-4 py-2 border-2 border-purple-500 font-poppins font-semibold md:text-base text-sm text-purple-900 hover:shadow-md   hover:shadow-purple-200"
        >
          {counter === questions.length - 1 ? "Result" : "Next"}
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
export default Questionaire;
