import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray700: "bg-white_A700 border border-gray_700 border-solid",
  OutlineGray800: "bg-white_A700 border border-gray_800 border-solid",
  OutlineGray503: "bg-white_A700 border border-gray_503 border-solid",
  OutlineLightblue800:
    "bg-white_A700 border border-light_blue_800 border-solid",
  OutlineBluegray101: "bg-white_A700 border border-bluegray_101 border-solid",
  OutlineGray502: "bg-white_A700 outline outline-[0.5px] outline-gray_502",
  srcOutlineBlack9003f: "bg-cyan_900_99 shadow-bs1",
  OutlineBluegray100:
    "bg-white_A700 outline outline-[1px] outline-bluegray_100",
};
const shapes = { RoundedBorder3: "rounded-radius3" };
const sizes = {
  sm: "lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px]",
  md: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:pt-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
  lg: "lg:p-[24px] xl:p-[31px] p-[35px] 3xl:p-[42px]",
  smSrc: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder3"]),
  variant: PropTypes.oneOf([
    "OutlineGray700",
    "OutlineGray800",
    "OutlineGray503",
    "OutlineLightblue800",
    "OutlineBluegray101",
    "OutlineGray502",
    "srcOutlineBlack9003f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
