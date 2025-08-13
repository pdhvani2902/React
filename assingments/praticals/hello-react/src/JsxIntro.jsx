import React from 'react';

function JsxIntro() {
  const topic = "JSX";
  const description = "JSX lets you write HTML in React easily.";

  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <p>{description}</p>
    </div>
  );
}

export default JsxIntro;
