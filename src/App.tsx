import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroList from "./HeroList/HeroList";

function App() {
  return (
    <div className="App">
      <h1>Marvel Heroes</h1>
      <HeroList />
    </div>
  );
}

export default App;
