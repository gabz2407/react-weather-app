export default function DisplayWeather(props) {
  return (
    <div className="DisplayWeather">
      <div>
        <h1>
          {props.weather.city} ({props.weather.country})
        </h1>
        <h3>Thursday 15:00</h3>
        <h3>{props.weather.description}</h3>
      </div>
      <div>
        <div>
          <h2>{props.weather.temperature}˚C</h2>
        </div>
        <h3>{props.weather.humidity}%</h3>
        <h3>{props.weather.windSpeed}km/h</h3>
      </div>
    </div>
  );
}
