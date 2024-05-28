import Error404 from "../assets/404-error.png";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <h1 className="text-4xl font-bold text-purple-900 md:text-8xl text-poppins w-fit">
          Oops!
        </h1>
        <p className="text-xl font-bold text-purple-900 md:text-3xl font-poppins">
          Error 404 - Page not Found
        </p>
      </div>
      <img
        src={Error404}
        alt="Error image"
        className=" md:w-96 md:h-80 w-80 h-72"
      />
      <button className="px-4 py-2 text-base font-bold text-purple-900 bg-purple-300 shadow shadow-purple-200 md:text-lg font-poppins">
        Back to Home Page
      </button>
    </div>
  );
};
export default Error;
