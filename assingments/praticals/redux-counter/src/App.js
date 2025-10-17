import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./recoil/todoState";

function App() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTodo = () => {
    const text = inputValue.trim();
    if (text === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    setInputValue("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Remove a task
  const removeTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((t) => t.id !== id));
  };

  // Add with Enter key
  const onKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>📝 Recoil To-Do List</h2>

      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          style={{ flex: 1, padding: "8px 12px", fontSize: 16 }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px", fontSize: 16 }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 24 }}>
        {todos.length === 0 && (
          <li style={{ textAlign: "center", color: "#666" }}>No tasks yet</li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 12px",
              borderBottom: "1px solid #eee",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#888" : "#111",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                lineHeight: 1,
              }}
              aria-label={`Remove ${todo.text}`}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
