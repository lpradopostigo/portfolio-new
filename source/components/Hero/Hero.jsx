import React from "react";
import bg from "../../../assets/scattered-forcefields.svg";

export default function Hero() {
  return (
    <section id="hero" className="h-screen-92">
      <h1 className="font-display-1 text-6xl text-left p-8">
        Hi,
        <br />
        I'm Luis Prado,
        <br /> Front End Developer
      </h1>

      <img
        src={bg}
        alt="background"
        className="h-screen absolute object-cover top-0"
        style={{ zIndex: -1 }}
      />
    </section>
  );
}
