import ResultCard from "./ResultCard";

const ScoreResult = () => {
  return (
    <div className="md:w-[80%] h-auto w-full p-8 flex flex-col gap-8  items-center ">
      <h1 className="font-poppins font-bold text-xl md:text-2xl text-purple-900 w-fit mb-4">
        Score: 9/10
      </h1>
      <div className="w-full h-auto grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </div>
  );
};
export default ScoreResult;
