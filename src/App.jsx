import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "c413d9c87d4d50748f21fae063e870d4";

  // Current location weather
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {

      try {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeatherByCoords(lat, lon);

      } catch (error) {

        console.log(error);

      }

    });

  }, []);

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {

    setLoading(true);

    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    setWeather(data);

    setLoading(false);

  };

  // Search city weather
  const fetchWeather = async () => {

    if(city === ""){
      return;
    }

    try {

      setLoading(true);
      setError("");

      const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();

      if(data.cod === "404"){

        setError("City not found");
        setWeather(null);

      } else {

        setWeather(data);

      }

      setLoading(false);

    } catch (error) {

      setError("Something went wrong");
      setLoading(false);

    }

  };

  return (
    <div className="app">

      <Navbar />

      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {weather && (
        <WeatherCard weather={weather} />
      )}

      <Footer />

    </div>
  );
}

export default App;