import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const newList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newList);
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "5px",
      }}
    >
      <span
        onClick={toggleItemCompletion}
        style={{
          textDecoration: item.isComplete ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
          textAlign: "left",
        }}
      >
        {item.text}
      </span>
      <button
        onClick={deleteItem}
        style={{ marginLeft: "10px", background: "red", color: "white" }}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
