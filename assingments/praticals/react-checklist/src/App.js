import React from "react";
import { ChecklistProvider } from "./context/ChecklistProvider";
import Checklist from "./components/Checklist";

function App() {
  return (
    <ChecklistProvider>
      <Checklist />
    </ChecklistProvider>
  );
}

export default App;
