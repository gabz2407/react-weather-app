import React, { useState } from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import ForecastResponse from "./ForecastResponse";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherResponse, setWeatherResponse] = useState("");
  const [forecastResponse, setForecastResponse] = useState("");

  function getWeather(response) {
    console.log(response.data);
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

  function getForecast(response) {
    console.log(response);
    let forecast = {
      maxTemp: Math.round(response.data.list[0].main.temp_max),
      minTemp: Math.round(response.data.list[0].main.temp_min),
    };

    setForecastResponse(forecast);
  }

  function searchCity(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64469ac67e6dc941feb5b50915a18dc7&units=metric`;
    axios.get(apiUrl).then(getWeather);

    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=64469ac67e6dc941feb5b50915a18dc7&units=metric`;
    axios.get(apiForecastUrl).then(getForecast);
  }

  function inputCity(city) {
    setCity(city.target.value);
  }

  return (
    <div className="App">
      <div className="weather-app">
        <form onSubmit={searchCity}>
          <input
            className="search-input"
            type="search"
            placeholder="Enter a city..."
            onChange={inputCity}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <DisplayWeather weather={weatherResponse} />
        <ForecastResponse forecast={forecastResponse} />
      </div>
      <footer className="footer">
        This project was created by <a href="/">Gabriela Agostinho</a> and it is
        open-sourced on <a href="/">GitHUb</a>
      </footer>
    </div>
  );
}

export default App;
