import "./ForecastResponse.css";

export default function ForecastResponse(props) {
  if (props.forecast) {
    return (
      <div className="ForecastResponse">
        <div>
          {props.forecast.maxTemp}/{props.forecast.minTemp}
        </div>
        <div>
          {props.forecast.maxTemp}/{props.forecast.minTemp}
        </div>
        <div>
          {props.forecast.maxTemp}/{props.forecast.minTemp}
        </div>
        <div>
          {props.forecast.maxTemp}/{props.forecast.minTemp}
        </div>
        <div>
          {props.forecast.maxTemp}/{props.forecast.minTemp}
        </div>
      </div>
    );
  }
}
