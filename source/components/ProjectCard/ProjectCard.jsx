import React from "react";
import { When } from "react-if";
import Button from "../Button";

export default function ProjectCard({
  name,
  description,
  imageSource,
  imageAlternateText,
  repositoryLink,
  websiteLink,
}) {
  return (
    <div className="md:w-80 sm:w-72 xs:w-80 overflow-hidden bg-white rounded-md shadow-md">
      <img
        className="2xs:h-52 xs:h-56 object-cover object-top w-full h-48 shadow-sm"
        src={imageSource}
        alt={imageAlternateText || name}
        loading="lazy"
      />

      <div className="flex flex-col gap-3 p-5">
        <span className="font-display text-lg font-semibold">{name}</span>

        <div className="font-display flex gap-3 text-sm text-white">
          <When condition={websiteLink}>
            <Button
              variant="link"
              target="_blank"
              rel="noreferrer noopener"
              href={websiteLink}
            >
              website
            </Button>
          </When>

          <When condition={repositoryLink}>
            <Button
              variant="link"
              target="_blank"
              rel="noreferrer noopener"
              href={repositoryLink}
            >
              repository
            </Button>
          </When>
        </div>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
