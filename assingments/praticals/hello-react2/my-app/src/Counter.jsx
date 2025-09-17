import React, { useState } from "react";

const Counter = () => {
  // declare state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // function to handle button click
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={styles.button}>
        Increment
      </button>
    </div>
  );
};

// simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Counter;
