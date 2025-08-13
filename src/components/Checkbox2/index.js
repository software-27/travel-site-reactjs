import React from "react";

const Checkbox2 = ({ id, type, name, className, handleClick, isChecked }) => {
  return (
    <input
      id={id}
      name={name}
      className="mx-3"
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox2;
