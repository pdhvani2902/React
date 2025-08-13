import React, { useState } from 'react';

function LiveInputForm() {
  const [inputValue, setInputValue] = useState('');

  // Update state on every keystroke
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Type Something:</h2>
      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleChange}
        style={styles.input}
      />
      <p>You typed: <strong>{inputValue}</strong></p>
    </div>
  );
}

// Optional styling
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '200px'
  }
};

export default LiveInputForm;
