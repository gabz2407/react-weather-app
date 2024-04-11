import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (props.weather) {
    return (
      <div className="DisplayWeather">
        <div className="todayInfoDisplay">
          <h1>
            {props.weather.city} ({props.weather.country})
          </h1>
          <h3 className="weather-properties">
            {day} {hours}:{minutes}
          </h3>

          <h3 className="weather-properties">
            Humidity: {props.weather.humidity}%
          </h3>
          <h3 className="weather-properties">
            Wind Speed: {props.weather.windSpeed}km/h
          </h3>
        </div>
        <div className="temperatureDisplay">
          <div>
            <h2 className="big-temperature">{props.weather.temperature}˚C</h2>
          </div>
          <h3 className="weather-properties">{props.weather.description}</h3>
        </div>
      </div>
    );
  }
}
