import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState", // unique ID for Recoil
  default: [], // start with an empty list
});
