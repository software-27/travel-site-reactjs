import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBlack9003f: "bg-cyan_900_99 shadow-bs1",
  OutlineGray700: "bg-white_A700 border border-gray_700 border-solid",
  OutlineGray500: "bg-white_A700 border border-gray_500 border-solid",
  OutlineGray801: "bg-white_A700 border border-gray_801 border-solid",
  OutlineLightblue800:
    "bg-white_A700 border border-light_blue_800 border-solid",
  OutlineBluegray101: "bg-white_A700 border border-bluegray_101 border-solid",
  OutlineGray502: "bg-white_A700 outline outline-[0.5px] outline-gray_502",
};
const shapes = { RoundedBorder3: "rounded-radius3",
                  RoundedBorder15: "rounded-radius155", };
const sizes = {
  smSrc: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  sm: "lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px]",
  md: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:pt-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
  lg: "lg:p-[24px] xl:p-[31px] p-[35px] 3xl:p-[42px]",
};

const Input2 = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder, 
      type = "",
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
          <input2
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

Input2.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder3"]),
  variant: PropTypes.oneOf([
    "srcOutlineBlack9003f",
    "OutlineGray700",
    "OutlineGray500",
    "OutlineGray801",
    "OutlineLightblue800",
    "OutlineBluegray101",
    "OutlineGray502",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg"]),
};
Input2.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineGray700",
  size: "",
};

export { Input2 };
