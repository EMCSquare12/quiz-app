import ResultCard from "./ResultCard";

const ScoreResult = ({ questions, answers }) => {
  console.log(questions);
  return (
    <div className="md:w-[80%] h-auto w-full p-8 flex flex-col gap-8  items-center ">
      <h1 className="mb-4 text-xl font-bold text-purple-900 font-poppins md:text-2xl w-fit">
        Score: 9/10
      </h1>
      <div className="grid w-full h-auto grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        {questions.map((items, index) => (
          <ResultCard
            key={index}
            questions={questions}
            answers={answers}
            questionTitle={items.question.text}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};
export default ScoreResult;
