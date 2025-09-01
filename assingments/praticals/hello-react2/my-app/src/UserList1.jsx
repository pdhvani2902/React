
//Use the useEffect() hook to fetch and display data from an API when the component mounts.
import React, { useState, useEffect } from "react";

function UserList1() {
  const [users, setUsers] = useState([]);    // store API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error handling

  useEffect(() => {
    // define async function inside useEffect
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // run once when component mounts

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List (Fetched from API)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList1;
