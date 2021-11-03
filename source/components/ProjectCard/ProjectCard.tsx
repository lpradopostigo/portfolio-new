import React from "react";

interface ProjectCardProps {
  description: string;
  name: string;
  imageSource: string;
  imageAlternateText?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="shadow-lg rounded-md overflow-hidden md:w-80 sm:w-72 xs:w-80">
      <img
        className="max-h-56 object-cover object-top w-full shadow-md sm:max-h-80 xs:max-h-64"
        src={props.imageSource}
        alt={props.imageAlternateText ?? props.name}
      />
      <div className="p-5 flex flex-col gap-3">
        <span className="font-display-0 font-semibold text-lg">
          {props.name}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
