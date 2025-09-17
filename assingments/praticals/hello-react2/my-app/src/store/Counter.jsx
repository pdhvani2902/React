import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions";

const Counter = () => {
  const count = useSelector((state) => state.count); // access state from store
  const dispatch = useDispatch(); // dispatch actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
