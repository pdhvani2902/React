import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={containerStyle}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

// Optional styles
const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

export default Counter;
