import React from "react";

import NavigationBar from "../NavigationBar";
import Hero from "../Hero";
import Projects from "../Projects";
import WorkingExperience from "../WorkingExperience";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <WorkingExperience />
      <Projects />
    </React.Fragment>
  );
}

export default App;
