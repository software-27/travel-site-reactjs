import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder3: "rounded-radius3",
  RoundedBorder15: "rounded-radius155",
  icbRoundedBorder4: "rounded-radius4",
  RoundedBorder6: "rounded-md",
  icbCircleBorder15: "rounded-[15px]",
};
const variants = {
  OutlineBlack90026: "bg-gray_50 shadow-bs text-black_900",
  OutlineBlue600: "border-2 border-blue_600 border-solid text-blue_600",
  FillLightblue800: "bg-light_blue_800 text-white_A700",
  FillBluegray101: "bg-bluegray_101",
  OutlineBlueA400:
  "bg-white_A700 border border-blue_A400 border-solid shadow-bs1 text-blue_A400",
  OutlineLightblue500:
    "bg-white_A700 outline outline-[1px] outline-light_blue_500 shadow-bs text-light_blue_500",
  OutlineLightblue800:
    "bg-white_A700 outline outline-[1px] outline-light_blue_800 text-light_blue_800",
  OutlineLightblue8001_2:
    "bg-white_A700 border-2 border-light_blue_800 border-solid",
  OutlineGray502:
    "bg-white_A700 outline outline-[0.25px] outline-gray_502 text-black_900",
  FillGreen900: "bg-green_900 text-white_A700",
  OutlineBluegray101:
    "bg-bluegray_101 outline outline-[0.5px] outline-bluegray_101 text-gray_501",
  OutlineLightblue5001_2:
    "border border-light_blue_500 border-solid text-light_blue_500",
  icbOutlineGray501: "bg-white_A700 border border-gray_501 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  OutlineBlue500:
    "bg-white_A700 border border-blue_500 border-solid text-blue_500",
  FillCyan700: "bg-cyan_700 text-white_A700",
  icbOutlineBlack9000c: "bg-cyan_700 shadow-bs",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  lg: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  xl: "lg:p-[22px] xl:p-[28px] p-[32px] 3xl:p-[38px]",
  smIcn: "p-[1px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder3",
    "RoundedBorder15",
    "icbRoundedBorder4",
    "RoundedBorder6",
    "icbCircleBorder15",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack90026",
    "OutlineBlue600",
    "FillCyan700",
    "icbOutlineBlack9000c",
    "OutlineBlue500",
    "FillLightblue800",
    "FillBluegray101",
    "OutlineLightblue500",
    "OutlineLightblue800",
    "OutlineLightblue8001_2",
    "OutlineGray502",
    "FillGreen900",
    "OutlineBluegray101",
    "OutlineLightblue5001_2",
    "icbOutlineGray501",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineBlack90026",
  size: "lg",
};

export { Button };
