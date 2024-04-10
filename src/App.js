import React, { useState } from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherResponse, setWeatherResponse] = useState("");

  function getWeather(response) {
    let weather = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
    };

    setWeatherResponse(weather);
  }

  function searchCity(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64469ac67e6dc941feb5b50915a18dc7&units=metric`;
    axios.get(apiUrl).then(getWeather);
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
      <DisplayWeather weather={weatherResponse} />
    </div>
  );
}

export default App;
