import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Switch, Case } from "react-if";
import { useButton } from "react-aria";

const Button = React.forwardRef((props, ref) => {
  const { children, variant } = props;
  const containerRef = useRef();
  const { buttonProps } = useButton(
    { ...props, elementType: variant === "regular" ? "button" : "a" },
    containerRef
  );
  const className =
    "px-2 py-1 text-sm text-white bg-black rounded";

  const setRefs = (node) => {
    if (ref && containerRef) {
      ref.current = node;
      containerRef.current = node;
    }
  };

  return (
    <Switch>
      <Case condition={variant === "regular"}>
        <button
          {...buttonProps}
          ref={setRefs}
          className={className}
        >
          {children}
        </button>
      </Case>

      <Case condition={variant === "link"}>
        <a {...buttonProps} ref={setRefs} className={className}>
          {children}
        </a>
      </Case>
    </Switch>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(["regular", "link"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "regular",
};

export default Button;
