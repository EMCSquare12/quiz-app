import { useNavigate } from "react-router-dom";

const PlayGameDashboard = ({
  width,
  isShow,
  onIsShow,
  difficulty,
  categories,
  onCategories,
}) => {
  const navigate = useNavigate();

  //Transform the first letter of text toUpperCase, and toLowerCase for AND word
  const textUpperCase = (text) => {
    return text
      .split("_")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")
      .replace(/ And /g, " and ");
  };

  //Navigate to questionaire path
  const handleStartGame = () => {
    if (categories.length !== 0) {
      navigate("/questionaire");
    } else {
      onIsShow(true); //Show the paragraph message if categories is empty array
    }
  };
  return (
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
          onClick={() => onCategories([])}
          className="w-full h-auto p-3 text-base font-bold text-purple-900 bg-purple-300 font-poppins hover:bg-purple-400"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
export default PlayGameDashboard;
