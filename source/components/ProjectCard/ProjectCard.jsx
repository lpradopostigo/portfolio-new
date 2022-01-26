import React from "react";
import { When } from "react-if";
import { useOverlayTriggerState } from "react-stately";
import { OverlayContainer, usePress } from "react-aria";

import ImageViewerOverlay from "../ImageOverlay";
import Button from "../Button";

export default function ProjectCard({
  name,
  description,
  imageUrl,
  repositoryUrl,
  websiteUrl,
}) {
  const overlayState = useOverlayTriggerState({});
  const { pressProps: openTriggerProps } = usePress({
    onPress: () => overlayState.open(),
  });

  return (
    <>
      <div className="md:w-80 sm:w-72 xs:w-80 overflow-hidden bg-white rounded-md shadow-md">
        <img
          {...openTriggerProps}
          className="2xs:h-52 xs:h-56 object-cover object-top w-full h-48 shadow-sm cursor-pointer"
          src={imageUrl}
          alt={`${name} image`}
          loading="lazy"
        />

        <div className="flex flex-col gap-3 p-5">
          <span className="font-display text-lg font-semibold">{name}</span>

          <div className="font-display flex gap-3 text-sm text-white">
            <When condition={websiteUrl}>
              <Button
                variant="link"
                target="_blank"
                rel="noreferrer noopener"
                href={websiteUrl}
              >
                website
              </Button>
            </When>

            <When condition={repositoryUrl}>
              <Button
                variant="link"
                target="_blank"
                rel="noreferrer noopener"
                href={repositoryUrl}
              >
                repository
              </Button>
            </When>
          </div>

          <p className="text-sm">{description}</p>
        </div>
      </div>

      <When condition={overlayState.isOpen}>
        <OverlayContainer>
          <ImageViewerOverlay
            isOpen
            onClose={overlayState.close}
            isDismissable
            imageSource={imageUrl}
          />
        </OverlayContainer>
      </When>
    </>
  );
}
