import React, { useState } from "react";
import "./App.css";

import { getWeather, getForecast } from "./api";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import UnitToggle from "./components/UnitToggle";

const backgrounds = {
  sunny: "/backgrounds/sunny.jpg",
  cloudy: "/backgrounds/cloudy.jpg",
  rain: "/backgrounds/rain.jpg",
  snow: "/backgrounds/snow.jpg",
  night: "/backgrounds/night.jpg",
};

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [unit, setUnit] = useState("C");

  const [background, setBackground] = useState(backgrounds.sunny);

  const handleSearch = async () => {

    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {

      const weatherRes = await getWeather(city);

      setWeather(weatherRes.data);

      const forecastRes = await getForecast(city);

      setForecast(forecastRes.data);

      const condition = weatherRes.data.weather[0].main.toLowerCase();
      const icon = weatherRes.data.weather[0].icon;

      if (icon.endsWith("n")) {

        setBackground(backgrounds.night);

      } else if (condition.includes("clear")) {

        setBackground(backgrounds.sunny);

      } else if (condition.includes("cloud")) {

        setBackground(backgrounds.cloudy);

      } else if (condition.includes("rain")) {

        setBackground(backgrounds.rain);

      } else if (condition.includes("snow")) {

        setBackground(backgrounds.snow);

      } else {

        setBackground(backgrounds.sunny);

      }

    } catch (err) {

      console.error(err);

      setWeather(null);
      setForecast(null);

      setError("No hemos encontrado esa ciudad.");

      setBackground(backgrounds.sunny);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="app-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        transition: "background-image .5s ease"
      }}
    >

      <div className="overlay">

        <header className="hero">

          <h1>🌤 Clima360</h1>

          <p className="subtitle">

            Consulta el clima en cualquier ciudad del mundo

          </p>

        </header>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        <UnitToggle
          unit={unit}
          setUnit={setUnit}
        />

        {loading && <Loader />}

        {error && (
          <ErrorMessage
            message={error}
          />
        )}

        {!loading && weather && (

          <WeatherCard
            weather={weather}
            unit={unit}
          />

        )}

        {!loading && forecast && (

          <ForecastCard
            forecast={forecast}
            unit={unit}
          />

        )}

      </div>

    </div>

  );

}

export default App;
