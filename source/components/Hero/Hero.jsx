import React from "react";
import background from "../../../assets/scattered-forcefields.svg";
import github from "../../../assets/github.svg";
import mail from "../../../assets/mail.svg";

export default function Hero() {
  return (
    <section id="hero" className="h-screen-92 font-display-1">
      <div className="flex flex-col px-8 py-10 gap-3">
        <span className="text-8xl font-medium">Hi,</span>
        <span className="text-6xl">I'm Luis Prado,</span>
        <span className="text-4xl font-light">Front End Developer</span>

        <div className="flex gap-6 items-center mt-8  w-max rounded-lg p-2 border-2">
          <a href="mailto: lpradopostigo@gmail.com">
            <img className="h-10 w-10" src={mail} alt="mail" />
          </a>

          <a href="https://github.com/lpradopostigo">
            <img className="h-10 w-10" src={github} alt="github" />
          </a>
        </div>
      </div>

      <img
        src={background}
        alt="background"
        className="h-screen absolute object-cover top-0 z-[-1]"
      />
    </section>
  );
}
