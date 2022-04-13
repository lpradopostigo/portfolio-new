import React, { Suspense } from "react";
import NavigationBar from "../NavigationBar";
import Hero from "../Hero";
import Projects from "../Projects";
import Experience from "../Experience";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <NavigationBar />
        <Hero />
        <Experience />
        <Projects />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
