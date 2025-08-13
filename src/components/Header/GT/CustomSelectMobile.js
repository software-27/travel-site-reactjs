import React, { useEffect, useState } from "react";
import "./mobile.css"; 

const CustomSelect = ({ options, value, onChange }) => {
  useEffect(() => {
    // This ensures the selected language in sessionStorage is always up-to-date
    sessionStorage.setItem("selectedLanguage", value);
  }, [value]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="notranslate custom-selectt">
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
