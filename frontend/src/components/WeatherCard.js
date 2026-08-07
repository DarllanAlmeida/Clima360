import React from "react";
import WeatherDetails from "./WeatherDetails";
import { getWeatherIcon } from "../utils/weatherIcons";
import "../App.css";

function WeatherCard({ weather, unit }) {

    const {
        name,
        sys,
        main,
        weather: details,
        timezone
    } = weather;

    const Icon = getWeatherIcon(details[0].main);

    const convertTemp = (temp) => {
        return unit === "C"
            ? Math.round(temp)
            : Math.round((temp * 9) / 5 + 32);
    };

    const localTime = new Date(
        Date.now() +
        timezone * 1000 +
        new Date().getTimezoneOffset() * 60000
    );

    const date = localTime.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    const hour = localTime.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (

        <div className="weather-card">

            <div className="weather-top">

                <p className="location">

                    📍 {name}, {sys.country}

                </p>

                <p className="date">

                    {date} · {hour}

                </p>

                <div className="weather-icon">

                    <Icon
                        size={120}
                        strokeWidth={1.5}
                    />

                </div>

                <h2 className="temperature">

                    {convertTemp(main.temp)}°

                </h2>

                <p className="description">

                    {details[0].description}

                </p>

            </div>

            <WeatherDetails
                weather={weather}
                unit={unit}
            />

        </div>

    );

}

export default WeatherCard;