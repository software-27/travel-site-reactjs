import { ErrorMessage } from "../ErrorMessage";
import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className,
  starCount = 5,
  color = "#A09D9D",
  activeColor = "#EBAB65",
  isEditable = false,
  errors = [],
  value = 0, // Default value in case reviews.combinedAverageRating is undefined
  ...restProps
}) => {

  return (
    <>
      <ReactStars
        edit={isEditable}
        classNames={className}
        count={starCount}
        isHalf
        color={color}
        activeColor={activeColor}
        value={value} // Use the value prop here
        {...restProps}
        key={value}
      />
      <ErrorMessage errors={errors} />
      {children}
    </>
  );
};

export { RatingBar };