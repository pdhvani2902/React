import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

// Inline styles for the card
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    maxWidth: "250px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  name: {
    margin: "0 0 10px 0",
    color: "#333",
  },
};

export default UserCard;

