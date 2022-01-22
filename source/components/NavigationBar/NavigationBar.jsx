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
      className="flex h-screen-8 justify-between font-medium items-center px-8 w-full sticky top-0 z-10 "
    >
      <a href="#hero">
        <img src={brackets} className="h-8 w-8" alt="logo" />
      </a>
      <ul className="flex items-center">
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </nav>
  );
}
