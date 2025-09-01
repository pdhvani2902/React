import React, { useState, useRef } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  // useRef to track renders without causing re-render
  const renderCount = useRef(0);

  renderCount.current += 1; // increment render count

  const handleIncrement = () => {
    setCount(count + 1); // only count changes cause re-render
  };

  const handleUpdateRef = () => {
    // updating ref does NOT trigger re-render
    renderCount.current += 1;
    console.log("Ref updated:", renderCount.current);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <p>Component render count: {renderCount.current}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={handleUpdateRef}>Update Ref Only</button>
    </div>
  );
}

export default Counter1;
