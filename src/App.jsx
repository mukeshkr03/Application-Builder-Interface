import React from "react";
import "./App.css";
import Editor from "./Editor";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Editor />
    </div>
  );
};

export default App;
