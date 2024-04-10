import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  function searchCity(event) {
    event.preventDefault();
  }

  function inputCity(city) {
    setCity(city.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={inputCity}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{city}</p>
    </div>
  );
}

export default App;
