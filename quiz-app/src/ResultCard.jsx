import ResultButton from "./ResultButton";

const ResultCard = () => {
  return (
    <div className="flex flex-col md:gap-4 gap-2 md:p-4 p-2 bg-white shadow shadow-purple-200">
      <h1 className="font-poppins font-medium md:text-sm text-xs text-purple-900">
        Question 1
      </h1>
      <ResultButton />
      <ResultButton />
      <ResultButton />
      <ResultButton />
    </div>
  );
};

export default ResultCard;
