import React from "react";

const sizeClasses = {
  txtMontserratBold15: "font-bold font-montserrat",
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium15: "font-medium font-montserrat",
  txtPoppinsMedium20Gray70001: "font-medium font-poppins",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtPoppinsBold32: "font-bold font-poppins",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtMontserratRomanBold20Cyan700: "font-bold font-montserrat",
  txtMontserratRomanLight14: "font-light font-montserrat",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanRegular15: "font-montserrat font-normal",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
};

const TextMp = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { TextMp };
