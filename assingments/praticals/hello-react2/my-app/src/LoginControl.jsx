import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {isLoggedIn ? (
        <button onClick={handleAuth}>Logout</button>
      ) : (
        <button onClick={handleAuth}>Login</button>
      )}
    </div>
  );
}

export default LoginControl;