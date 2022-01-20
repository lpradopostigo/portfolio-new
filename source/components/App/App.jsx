import React from "react";

import NavigationBar from "../NavigationBar";
import Hero from "../Hero";
import Projects from "../Projects";
import Contact from "../Contact";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
