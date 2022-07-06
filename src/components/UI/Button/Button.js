import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.module.css";

const Button = ({ className, type, onClick, disabled, children }) => (
  <button
    type={type}
    className={`${classes.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "",
  children: null,
};

export default React.memo(Button);
