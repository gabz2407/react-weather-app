import React from "react";
import "./App.css";

function App() {
  function searchCity(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={searchCity}>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
