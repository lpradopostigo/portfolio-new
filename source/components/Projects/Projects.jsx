import React from "react";

import ProjectCard from "../ProjectCard";
import imageCipher from "../../../assets/image-cipher.jpg";
import audioPlayer from "../../../assets/audio-player.jpg";
import calculator from "../../../assets/calculator.jpg";
import travelly from "../../../assets/travelly.jpg";
import npmPackage from "../../../assets/npm-package.png";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-10 p-10 bg-purple">
      <h2 className="text-xl font-display font-bold text-white">Projects</h2>
      <div className="flex flex-wrap gap-10 self-center justify-center">
        <ProjectCard
          name="grass-audio"
          description="A gapless audio player class for node, it uses the BASS library as engine"
          websiteLink="https://www.npmjs.com/package/grass-audio"
          repositoryLink="https://github.com/lpradopostigo/grass-audio"
          imageSource={npmPackage}
        />

        <ProjectCard
          name={"Image Cipher Tool"}
          description={
            "A symmetric cipher image tool, the algorithm was developed in Rust and brought to the web using Web Assembly"
          }
          imageSource={imageCipher}
          websiteLink="https://brocolio-cipher.netlify.app"
          repositoryLink="https://github.com/lprapopostigo/brocolio-cipher"
        />

        <ProjectCard
          name={"Audio Player"}
          description={
            "Simple audio player developed using Lit as component library, typescript and redux for state management"
          }
          imageSource={audioPlayer}
          repositoryLink="https://github.com/lpradopostigo/brocolio-music-player"
          websiteLink="https://brocolio-music-player.netlify.app"
        />

        <ProjectCard
          name={"Calculator"}
          description={"Material Design responsive javascript calculator"}
          imageSource={calculator}
          repositoryLink="https://github.com/lprapopostigo/web-calculator"
          websiteLink="https://brocolio-calculator.netlify.app"
        />

        <ProjectCard
          name={"Travelly"}
          description={"Landing Page concept for a travel agency"}
          imageSource={travelly}
          websiteLink="https://travelly-brocolio.netlify.app"
          repositoryLink="https://github.com/lprapopostigo/travelly"
        />
      </div>
    </section>
  );
}
