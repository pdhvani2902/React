import React from "react";
import FruitList from "./FruitList"; 
import UserList from "./UserList";
import Counter from "./Counter";
import UserList1 from "./UserList";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";


function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>npm install @reduxjs/toolkit react-redux

      <h1>Welcome to React</h1>
      {/*<FruitList /> */}
     {/* <UserList /> */}
      {/*<Counter />   */}
      {/*<UserList1 /> */}
      <Counter />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    </div>
  );
}

export default App;
