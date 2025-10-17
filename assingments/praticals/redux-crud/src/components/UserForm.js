import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/users/userSlice";

function UserForm({ selectedUser, setSelectedUser }) {
  const [name, setName] = useState(selectedUser ? selectedUser.name : "");
  const [email, setEmail] = useState(selectedUser ? selectedUser.email : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(updateUser({ id: selectedUser.id, name, email }));
      setSelectedUser(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, email }));
    }
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        {selectedUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
