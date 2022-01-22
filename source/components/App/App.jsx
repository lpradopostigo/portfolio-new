import React from "react";

import NavigationBar from "../NavigationBar";
import Hero from "../Hero";
import Projects from "../Projects";
import Experience from "../Experience";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <Experience />
      <Projects />
    </React.Fragment>
  );
}

export default App;
