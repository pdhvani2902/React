import React from 'react';

function UserCard(props) {
  const { name, age, location } = props;

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}


const cardStyle = {
  border: '1px solid #ccc',
  padding: '16px',
  borderRadius: '8px',
  maxWidth: '250px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  margin: '16px auto',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9'
};

export default UserCard;
