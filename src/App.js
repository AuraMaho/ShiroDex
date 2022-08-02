import "./styles.css";
import React from "react";
import Navbar from "../componentes/navbar";
import Searchbar from "../componentes/searcbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
      </div>
    </div>
  );
}
