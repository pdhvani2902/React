import React, { useState } from "react";

const CounterUseState = () => {
  // useState hook to store count value
  const [count, setCount] = useState(0);

  // increment function
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // decrement function
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterUseState;
