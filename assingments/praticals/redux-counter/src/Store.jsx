//Create a simple counter application using Redux for state management. Implement actions to increment and decrement the counter. 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
