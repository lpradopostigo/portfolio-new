import React, { useEffect, useRef } from "react";
import brackets from "../../../assets/brackets.svg";

export default function NavigationBar() {
  const ref = useRef(null);

  useEffect(() => {
    const initialClasses = ref.current.className;
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        ref.current.className = `${initialClasses} bg-white bg-opacity-90 backdrop-blur-md shadow`;
      } else {
        ref.current.className = initialClasses;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={ref}
      className="h-screen-8 sticky top-0 z-10 flex items-center justify-between w-full px-8 font-medium"
    >
      <a href="#hero">
        <img src={brackets} className="w-8 h-8" alt="logo" />
      </a>
      <ul className="flex items-center gap-8">
        <a href="#experience">
          <li>Experience</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </nav>
  );
}
