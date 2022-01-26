import React from "react";

import ProjectCard from "../ProjectCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");
  const data = t("data", { returnObjects: true });

  return (
    <section id="projects" className="bg-purple flex flex-col gap-10 p-10">
      <h2 className="font-display text-xl font-bold text-white">Projects</h2>
      <div className="flex flex-wrap self-center justify-center gap-10">
        {data.map?.((elem, index) => (
          <ProjectCard key={index} {...elem} />
        ))}
      </div>
    </section>
  );
}
