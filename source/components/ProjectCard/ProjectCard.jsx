import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="shadow-lg rounded-md overflow-hidden md:w-80 sm:w-72 xs:w-80">
      <img
        className="max-h-56 object-cover object-top w-full shadow-md sm:max-h-80 xs:max-h-64"
        src={props.imageSource}
        alt={props.imageAlternateText ?? props.name}
        loading="lazy"
      />
      <div className="p-5 flex flex-col gap-3">
        <span className="font-display-0 font-semibold text-lg">
          {props.name}
        </span>

        <div className="flex gap-3 text-sm text-white font-display-0">
          <a
            href={props.websiteLink}
            className="p-1 bg-black hover:bg-blue-600"
            target="_blank"
            rel="noreferrer noopener"
          >
            website
          </a>

          {props.repositoryLink != null && (
            <a
              href={props.repositoryLink}
              className="p-1 bg-black hover:bg-blue-600"
              target="_blank"
              rel="noreferrer noopener"
            >
              repository
            </a>
          )}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
