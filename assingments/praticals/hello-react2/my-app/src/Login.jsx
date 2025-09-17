import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      login(username);
      setUsername("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={username}
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
        Login
      </button>
    </div>
  );
};

export default Login;
