import React from "react";
import Note from "./components/Note";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Notes</h1>
      <Note />
    </div>
  );
};

export default App;
