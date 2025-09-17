import React from "react";

function ListUser() {
  // Array of users with unique IDs
  const users = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Alice Smith", age: 30 },
    { id: 3, name: "Bob Johnson", age: 22 },
    { id: 4, name: "Emma Brown", age: 28 }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ margin: "8px 0" }}>
            <strong>{user.name}</strong> — Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
