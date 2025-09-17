import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <TodoItemCreator />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
