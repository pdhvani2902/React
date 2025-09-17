import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "70%" }}
      />
      <button onClick={addItem} style={{ marginLeft: "10px", padding: "8px" }}>
        Add
      </button>
    </div>
  );
}

export default TodoItemCreator;
