import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
