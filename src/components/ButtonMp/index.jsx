import React from "react";
import PropTypes from "prop-types";

const ButtonMp = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button className={`${className}`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

ButtonMp.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { ButtonMp };