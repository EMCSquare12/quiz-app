
const Header = () => {
  return (
    <header
      className={`h-[10vh] w-full bg-purple-50  flex-row items-center px-8 justify-between border-b border-purple-200 flex`}
    >
      <div className="flex justify-start w-[50%]">
        <h1 className="text-xl font-bold text-purple-900 md:text-2xl h-fit w-fit font-poppins">
          MindMaze
        </h1>
      </div>
      {/* <div className="flex flex-row justify-end gap-6 py-2 w-[50%]">
        <div className="flex flex-row items-center gap-4 w-fit">
          <h1 className="flex gap-4 text-sm font-bold text-purple-900 font-poppins w-fit">
            DIFFICULTY:{" "}
          </h1>
          <h2 className="px-2 py-1 text-sm font-semibold text-purple-600 bg-purple-100">
            {difficulty}
          </h2>
        </div>
        <div className="h-auto w-[1px] bg-purple-200"></div>
        <div className="flex flex-row items-center gap-4 w-fit">
          <h1 className="flex gap-4 text-sm font-bold text-purple-900 font-poppins">
            CATEGORY:
          </h1>
          <ul className="flex flex-row flex-wrap items-center gap-4">
            {category.map((item, index) => (
              <li className="px-2 py-1 text-sm font-semibold text-purple-600 bg-purple-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </header>
  );
};
export default Header;
