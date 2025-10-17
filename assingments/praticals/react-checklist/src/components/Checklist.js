import React, { useContext } from "react";
import { ChecklistContext } from "../context/ChecklistContext";

const Checklist = () => {
  const { selectedOptions, toggleOption } = useContext(ChecklistContext);

  const options = ["React", "JavaScript", "CSS", "HTML", "Node.js"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Interactive Checklist</h2>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            checked={selectedOptions.includes(option)}
            onChange={() => toggleOption(option)}
          />
          <label htmlFor={option} style={{ marginLeft: "8px" }}>
            {option}
          </label>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <strong>Selected Options:</strong>{" "}
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : "None"}
      </div>
      {console.log("Currently selected options:", selectedOptions)}
    </div>
  );
};

export default Checklist;
