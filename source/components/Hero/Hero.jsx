import React from "react";
import background from "../../../assets/scattered-forcefields.svg";
import github from "../../../assets/github.svg";
import mail from "../../../assets/mail.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen-92 font-display flex items-center md:justify-center"
    >
      <div className="flex flex-col  px-8 gap-2 md:items-center md:gap-4">
        <span className="text-6xl font-medium md:text-7xl">Hi,</span>
        <span className="text-4xl md:text-5xl">I'm Luis Prado,</span>
        <span className="text-2xl font-light md:text-3xl">
          Front End Developer
        </span>

        <div className="flex gap-6 items-center px-2 mt-12 pb-32 w-max md:pb-0">
          <a
            href="mailto: lpradopostigo@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="h-8 w-8 md:h-10 md:w-10" src={mail} alt="mail" />
          </a>

          <a
            href="https://github.com/lpradopostigo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              loading="lazy"
              className="h-8 w-8 md:h-10 md:w-10"
              src={github}
              alt="github"
            />
          </a>
        </div>
      </div>

      <img
        src={background}
        alt="background"
        className="h-screen absolute object-cover object-left top-0 z-[-1] md:object-center"
      />
    </section>
  );
}
