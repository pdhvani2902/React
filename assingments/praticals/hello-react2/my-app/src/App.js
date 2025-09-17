import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

import FruitList1 from "./FruitList";
import ListUser from "./UserList";
import Counter from "./Counter";
import CounterUseState from "./CounterUseState.jsx";
import LoginControl from "./LoginControl";
import VotingEligibility from "./VotingEligibility.jsx";
import RegistrationForm from "./RegistrationForm";
import RegistrationForm1 from "./RegistrationForm1.jsx";
import ListOfUser from "./ListOfUser.jsx";
import LoggerComponent from "./LoggerComponent";
import Home from "./Home.jsx";
import About from "./About";
import ContactOfReact from "./ContactOfReact.jsx";

import TodoList from "./TodoList";
import CrudApp from "./CrudApp";

import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Content from "./Content";

import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Welcome from "./Welcome";

const App = () => {
  const [show, setShow] = useState(false);

  const navStyle = {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px",
  };

  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "blue",
  };

  return (
    <div>
      {/* React Router Section */}
      <Router>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contactOfReact" style={linkStyle}>Contact</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Counter />

                <h1 style={{ textAlign: "center" }}>Conditional Rendering Example</h1>
                <LoginControl />

                <VotingEligibility age={20} />
                <VotingEligibility age={15} />

                <FruitList1 />
                <ListUser />

                <h1 style={{ textAlign: "center" }}>React Controlled Form</h1>
                <RegistrationForm />

                <h1 style={{ textAlign: "center" }}>React Form with Email Validation</h1>
                <RegistrationForm1 />

                <h1 style={{ textAlign: "center" }}>React Class Component Example</h1>
                <ListOfUser />

                <h1 style={{ textAlign: "center" }}>Lifecycle Method Demo</h1>
                <div style={{ textAlign: "center" }}>
                  <button onClick={() => setShow(!show)}>
                    {show ? "Unmount Component" : "Mount Component"}
                  </button>
                </div>
                {show && <LoggerComponent />}

                <h1 style={{ textAlign: "center" }}>React useState Counter Example</h1>
                <CounterUseState />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactOfReact" element={<ContactOfReact />} />
        </Routes>
      </Router>

      {/* Redux Counter Section */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Redux Counter App</h2>
        <Counter />
      </div>

      {/* Recoil Todo List Section */}
      <RecoilRoot>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>Recoil Todo List</h1>
          <TodoList />
        </div>
      </RecoilRoot>

      {/* Theme Toggle Section */}
      <ThemeProvider>
        <Navbar />
        <Content />
      </ThemeProvider>

      {/* Auth Section */}
      <AuthProvider>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>React Auth with Context API</h1>
          <Welcome />
          <Login />
        </div>
      </AuthProvider>

      {/* CRUD App Section */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Redux Toolkit CRUD App</h1>
        <CrudApp />
      </div>
    </div>
  );
};

export default App;
