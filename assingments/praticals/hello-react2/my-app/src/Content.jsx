import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <p>This is the content area.</p>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default Content;
