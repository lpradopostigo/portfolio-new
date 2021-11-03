import React from "react";

import ProjectCard from "../ProjectCard";
import imageCipher from "../../../assets/image-cipher.jpg";
import audioPlayer from "../../../assets/audio-player.jpg";
import calculator from "../../../assets/calculator.jpg";
import travelly from "../../../assets/travelly.jpg";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-5 p-5">
      <h2 className="text-xl font-display-0 font-semibold">Projects</h2>
      <div className="flex flex-wrap gap-5 self-center justify-center md:gap-10">
        <ProjectCard
          name={"Image Cipher Tool"}
          description={
            "A symmetric cipher image tool, the algorithm was developed in Rust and brought to the web using Web Assembly"
          }
          imageSource={imageCipher}
        />

        <ProjectCard
          name={"Audio Player"}
          description={
            "Simple audio player developed using Lit as component library, typescript and redux for state management"
          }
          imageSource={audioPlayer}
        />

        <ProjectCard
          name={"Calculator"}
          description={
            "Material Design responsive javascript calculator"
          }
          imageSource={calculator}
        />

        <ProjectCard
          name={"Travelly"}
          description={
            "Landing Page concept for a travel agency"
          }
          imageSource={travelly}
        />
      </div>
    </section>
  );
}
