import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useOverlay,
  usePreventScroll,
  useModal,
  FocusScope,
  useDialog,
} from "react-aria";

export default function ImageViewerOverlay(props) {
  const { imageUrl } = props;
  const ref = useRef();
  const { overlayProps, underlayProps } = useOverlay(props, ref);
  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);

  // workaround for issue https://github.com/adobe/react-spectrum/issues/1513
  useEffect(() => {
    const elementsId = ["overlay-container"];
    elementsId.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }
      element.addEventListener("touchstart", (e) => {
        e.preventDefault();
      });
    });
  }, [props.isOpen]);

  return (
    <div
      className="fixed z-[100] top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-xl"
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className="focus:outline-0 bg-white"
          aria-label="image overlay"
        >
          <img
            className="max-h-[90vh] max-w-[90vw] object-contain"
            src={imageUrl}
            alt="aea"
          />
        </div>
      </FocusScope>
    </div>
  );
}

ImageViewerOverlay.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  isDismissable: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
};
ImageViewerOverlay.defaultProps = {
  isOpen: false,
  isDismissable: false,
};
