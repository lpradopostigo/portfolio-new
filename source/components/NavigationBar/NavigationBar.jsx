import React, { useEffect, useRef } from "react";
import brackets from "../../../assets/brackets.svg";

export default function NavigationBar() {
  const ref = useRef(null);

  useEffect(() => {
    const initialClasses = ref.current.className;
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 80) {
        ref.current.className = `${initialClasses} bg-white bg-opacity-90 backdrop-blur-lg`;
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
      className="flex h-screen-8 justify-between items-center px-8 w-full sticky top-0 z-10"
    >
      <a href="#hero">
        <img src={brackets} className="h-8" alt="logo" />
      </a>
      <ul className="flex items-center gap-4 font-display-0 font-medium ">
        <a href="#projects">
          <li className="hover:text-purple">Projects</li>
        </a>
      </ul>
    </nav>
  );
}
