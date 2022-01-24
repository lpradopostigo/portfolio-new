import React from "react";
import PropTypes from "prop-types";
import { Switch, Case } from "react-if";

export default function Button({ children, variant, ...htmlProps }) {
  const className = "font-display px-2 py-1 text-sm bg-black rounded";

  return (
    <Switch>
      <Case condition={variant === "regular"}>
        <button className={className} {...htmlProps}>
          {children}
        </button>
      </Case>

      <Case condition={variant === "link"}>
        <a className={className} {...htmlProps}>
          {children}
        </a>
      </Case>
    </Switch>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["regular", "link"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "regular",
};
