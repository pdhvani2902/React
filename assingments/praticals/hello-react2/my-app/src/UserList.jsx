//Create a list of users where each user has a unique id. Render the user list using React and assign a unique key to each user.
import React from "react";

function UserList() {
  // Array of users with unique id
  const users = [
    { id: 1, name: "Dhruv" },
    { id: 2, name: "Anjali" },
    { id: 3, name: "Karan" },
    { id: 4, name: "Meera" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          // using user.id as the unique key ✅
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
