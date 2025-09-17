import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Welcome = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h2>Please log in to continue</h2>
      )}
    </div>
  );
};

export default Welcome;
