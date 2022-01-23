import React from "react";
import { useTranslation } from "react-i18next";

import background from "../../../assets/scattered-forcefields.svg";
import github from "../../../assets/github.svg";
import mail from "../../../assets/mail.svg";

export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <section
      id="hero"
      className="h-screen-92 font-display md:justify-center flex items-center"
    >
      <div className="md:items-center md:gap-4 flex flex-col gap-2 px-8">
        <span className="md:text-7xl text-6xl font-medium">{t("hi")}</span>
        <span className="md:text-5xl text-4xl">{t("myName")}</span>
        <span className="md:text-3xl text-2xl font-light">{t("role")}</span>

        <div className="w-max md:pb-0 flex items-center gap-6 px-2 pb-32 mt-12">
          <a
            href="mailto: lpradopostigo@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="md:h-10 md:w-10 w-8 h-8" src={mail} alt="mail" />
          </a>

          <a
            href="https://github.com/lpradopostigo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              loading="lazy"
              className="md:h-10 md:w-10 w-8 h-8"
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
