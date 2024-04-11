import "./ForecastResponse.css";

export default function ForecastResponse(props) {
  if (props.forecast) {
    return (
      <div className="ForecastResponse">
        <div>{props.forecast.temp0}˚C</div>
        <div>{props.forecast.temp1}˚C</div>
        <div>{props.forecast.temp2}˚C</div>
        <div>{props.forecast.temp3}˚C</div>
        <div>{props.forecast.temp4}˚C</div>
      </div>
    );
  }
}
