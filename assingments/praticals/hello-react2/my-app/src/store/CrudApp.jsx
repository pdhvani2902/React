import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "./store/itemSlice";

const CrudApp = () => {
  const items = useSelector(state => state.items.items);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editId) {
      dispatch(updateItem({ id: editId, text: input }));
      setEditId(null);
    } else {
      dispatch(addItem({ text: input }));
    }

    setInput("");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setInput(item.text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>CRUD Application</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter item"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        {editId ? "Update" : "Add"}
      </button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.text}
            <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteItem(item.id))} style={{ marginLeft: "5px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
