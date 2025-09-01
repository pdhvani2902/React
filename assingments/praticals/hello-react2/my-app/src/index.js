import React from "react";
import ReactDOM from "react-dom/client"; // ✅ only once
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

