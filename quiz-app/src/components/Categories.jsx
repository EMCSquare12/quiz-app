import quizOption from "./quizOption";
import { useState } from "react";

const Categories = ({ onCategory, onCategories, categories, category }) => {
  // const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState([]);

  const handleCategoryOnclick = (value) => {
    const categoriesCopy = [...categories]; //Shallow copy of categories

    if (categoriesCopy.includes(value)) {
      const updatedCategories = categoriesCopy.filter((item) => item !== value);
      // setCategories(updatedCategories);
      onCategories(updatedCategories);
    } else {
      // setCategories([...categoriesCopy, value]);
      onCategories([...categoriesCopy, value]);
    }

    // setCategory(value);
    onCategory(value);
  };

  //Transform the first letter of text toUpperCase, and toLowerCase for AND word
  const textUpperCase = (text) => {
    return text
      .split("_")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")
      .replace(/ And /g, " and ");
  };
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-gray-50 md:p-8">
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
  );
};
export default Categories;
