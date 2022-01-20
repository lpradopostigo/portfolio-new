import React from "react";
import brackets from "../../../assets/brackets.svg";

const NavigationBar = () => {
  return (
    <nav className="bg-black bg-opacity-80 flex h-screen-10 justify-between items-center px-5 w-full sticky top-0 z-10">
      <a href="#hero">
        <img src={brackets} alt="logo" />
      </a>
      <ul className="flex items-center gap-4 text-white font-display-0">
        <a href="#projects">
          <li className="hover:text-green-300">Projects</li>
        </a>
        <a href="#contact">
          <li className="hover:text-green-300">Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavigationBar;
