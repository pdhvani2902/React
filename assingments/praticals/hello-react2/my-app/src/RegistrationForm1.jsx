import React, { useState } from "react";

function RegistrationForm1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check email validity
    if (!isValidEmail(formData.email)) {
      setError("❌ Please enter a valid email address");
      return;
    }

    setError(""); // Clear error if valid
    alert(`✅ Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Registration Form (with Validation)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Show error if email is invalid */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm1;
