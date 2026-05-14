import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";

function WeatherCard({ weather }) {

  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div>

      <div className="weather-card">

        <div className="left-side">

          <h1>
            {Math.round(weather.main.temp)}
            <span>°C</span>
          </h1>

          <h2>{weather.name}</h2>

          <p>{weather.weather[0].main}</p>

        </div>

        <div className="weather-icon">

          <img src={icon} alt="weather icon" />

          <div className="details">

            <p>
              <FaTemperatureHigh />
              Feels like: {Math.round(weather.main.feels_like)}°C
            </p>

            <p>
              <WiHumidity size={28} />
              Humidity: {weather.main.humidity}%
            </p>

            <p>
              <FaWind />
              Wind: {weather.wind.speed} km/h
            </p>

          </div>

        </div>

      </div>

      <div className="forecast-container">

        <div className="forecast-card">
          <h3>Mon</h3>
          <p>☁️</p>
          <p>24°C</p>
        </div>

        <div className="forecast-card">
          <h3>Tue</h3>
          <p>☀️</p>
          <p>28°C</p>
        </div>

        <div className="forecast-card">
          <h3>Wed</h3>
          <p>🌧️</p>
          <p>22°C</p>
        </div>

        <div className="forecast-card">
          <h3>Thu</h3>
          <p>⛅</p>
          <p>26°C</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;