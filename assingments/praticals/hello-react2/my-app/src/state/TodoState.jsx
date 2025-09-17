import { atom } from "recoil";

// Atom to store the list of todos
export const todoListState = atom({
  key: "todoListState", // unique ID
  default: [], // initial empty list
});
