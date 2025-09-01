import React from 'react'

function Frutilist() {
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // using map() to render list
        ))}
      </ul>
    </div>
  )
}

export default Frutilist
