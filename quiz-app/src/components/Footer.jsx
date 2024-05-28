import { useState } from "react";
import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" flex flex-row items-center w-full gap-8 bg-purple-200 pl-6  h-[8vh]">
      <h1 className="flex flex-row items-center gap-2 text-sm font-medium text-purple-600 md:text-base font-poppins">
        <FaCopyright />
        MindMaze by{" "}
        <span className="font-bold text-purple-900">Erniel Caalim</span>{" "}
        {new Date().getFullYear()}
      </h1>
      <ul className="flex flex-row items-center gap-4">
        <li className="text-base text-purple-900 md:text-lg">
          <a href="https://github.com/EMCSquare12/quiz-app.git" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="text-base text-purple-900 md:text-lg">
          <a href="mailto:ninelcaalim12@gmail.com" target="_blank">
            <SiGmail />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
