import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, deleteItem } from "./StoreOfRedux";

const CrudApp = () => {
  const items = useSelector((state) => state.crud?.items || []); // safe fallback
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch(addItem({ id: Date.now(), text: input }));
    setInput("");
  };

  const handleUpdate = () => {
    dispatch(updateItem({ id: editId, text: input }));
    setEditId(null);
    setInput("");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setInput(item.text);
  };

  const handleDelete = (id) => dispatch(deleteItem(id));

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      {editId === null ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              background: "#f1f1f1",
              borderRadius: "5px",
            }}
          >
            <span>{item.text}</span>
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button
                onClick={() => handleDelete(item.id)}
                style={{ background: "red", color: "white" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
