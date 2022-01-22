import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="shadow-md bg-white rounded-md overflow-hidden md:w-80 sm:w-72 xs:w-80">
      <img
        className="max-h-56 object-cover object-top w-full shadow-md sm:max-h-80 xs:max-h-64"
        src={props.imageSource}
        alt={props.imageAlternateText ?? props.name}
        loading="lazy"
      />
      <div className="p-5 flex flex-col gap-3">
        <span className="font-display font-semibold text-lg">{props.name}</span>

        <div className="flex gap-3 text-sm text-white font-display">
          <a
            href={props.websiteLink}
            className="px-2 py-1 text-sm bg-black rounded"
            target="_blank"
            rel="noreferrer noopener"
          >
            website
          </a>

          {props.repositoryLink != null && (
            <a
              href={props.repositoryLink}
              className="px-2 py-1 bg-black text-sm rounded"
              target="_blank"
              rel="noreferrer noopener"
            >
              repository
            </a>
          )}
        </div>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
