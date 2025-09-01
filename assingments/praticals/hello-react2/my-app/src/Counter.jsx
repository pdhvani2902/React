//Create a functional component with a counter using the useState() hook. Include buttons to increment and decrement the counter. 

import React, { useState } from "react";

function Counter() {
  // declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // functions to handle increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
