const ScoreBoard = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-row items-center justify-between">
        <div className="flex flex-col md:w-[30%] w-[50%] gap-3 ">
          <h1 className="font-poppins font-bold text-purple-900 md:text-lg text-base">
            Question
          </h1>
          <div className="w-full md:h-8 h-6 border-purple-500 bg-white border-2"></div>
        </div>
        <div className="flex flex-col w-auto gap-3">
          <h1 className="font-poppins font-bold text-purple-900 md:text-lg text-base">
            Score
          </h1>
          <div className="w-full md:h-8 h-6 font-poppins font-bold text-purple-500 md:text-4xl text-2xl items-center justify-center flex">
            0
          </div>
        </div>
      </div>
    </>
  );
};
export default ScoreBoard;
