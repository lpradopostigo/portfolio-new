import React from "react";
import bg from "../../../assets/scattered-forcefields.svg";

export default function Hero() {
  return (
    <section id="hero" className="h-screen-92 font-display-1">
      <div className="flex flex-col px-8 py-10 gap-3">
        <span className="text-8xl font-medium">Hi,</span>
        <span className="text-6xl">
          I'm Luis Prado,
        </span>

        <span className="text-4xl font-light">Front End Developer</span>
      </div>

      <img
        src={bg}
        alt="background"
        className="h-screen absolute object-cover top-0"
        style={{ zIndex: -1 }}
      />
    </section>
  );
}
