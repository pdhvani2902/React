import React, { useState } from 'react';

function ClickToggleButton() {
  // State to hold the button text
  const [text, setText] = useState("Not Clicked");

  // Event handler to update the text
  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>{text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickToggleButton;
