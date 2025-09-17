import React from "react";

function FruitList1() {
  // Array of fruit names
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Fruit List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
