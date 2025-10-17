import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";

function UserList({ setSelectedUser }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Users List</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>
                <strong>{user.name}</strong> — {user.email}
              </span>
              <div>
                <button
                  onClick={() => setSelectedUser(user)}
                  style={{ marginRight: "8px" }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
