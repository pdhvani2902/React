import React from "react";
import FruitList from "./FruitList"; 
import UserList from "./UserList";
import Counter from "./Counter";
import UserList1 from "./UserList";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  // Navigation styles
  const navStyle = {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px"
  };

  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "blue"
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;