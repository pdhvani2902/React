import React, { useState } from "react";
import { ChecklistContext } from "./ChecklistContext";

// Provider to manage checklist state
export const ChecklistProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option) // remove if exists
        : [...prev, option]                      // add if not
    );
  };

  return (
    <ChecklistContext.Provider value={{ selectedOptions, toggleOption }}>
      {children}
    </ChecklistContext.Provider>
  );
};
