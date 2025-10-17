import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>🧑‍💻 Redux Toolkit CRUD App</h2>
      <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default App;
