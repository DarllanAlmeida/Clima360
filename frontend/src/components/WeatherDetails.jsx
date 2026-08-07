import React from "react";

function WeatherDetails({ weather, unit }) {

    const { main, wind, sys, visibility } = weather;

    const convertTemp = (temp) => {
        return unit === "C"
            ? Math.round(temp)
            : Math.round((temp * 9) / 5 + 32);
    };

    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (

        <div className="weather-grid">

            <div className="weather-item">

                <span>🌡️</span>

                <h3>{convertTemp(main.temp)}°</h3>

                <p>Temperatura</p>

            </div>

            <div className="weather-item">

                <span>🥵</span>

                <h3>{convertTemp(main.feels_like)}°</h3>

                <p>Sensación</p>

            </div>

            <div className="weather-item">

                <span>💧</span>

                <h3>{main.humidity}%</h3>

                <p>Humedad</p>

            </div>

            <div className="weather-item">

                <span>🌬️</span>

                <h3>{wind.speed} m/s</h3>

                <p>Viento</p>

            </div>

            <div className="weather-item">

                <span>⬆️</span>

                <h3>{convertTemp(main.temp_max)}°</h3>

                <p>Máxima</p>

            </div>

            <div className="weather-item">

                <span>⬇️</span>

                <h3>{convertTemp(main.temp_min)}°</h3>

                <p>Mínima</p>

            </div>

            <div className="weather-item">

                <span>🌅</span>

                <h3>{sunrise}</h3>

                <p>Amanecer</p>

            </div>

            <div className="weather-item">

                <span>🌇</span>

                <h3>{sunset}</h3>

                <p>Atardecer</p>

            </div>

            <div className="weather-item">

                <span>📈</span>

                <h3>{main.pressure} hPa</h3>

                <p>Presión</p>

            </div>

            <div className="weather-item">

                <span>👁️</span>

                <h3>{visibility / 1000} km</h3>

                <p>Visibilidad</p>

            </div>

        </div>

    );

}

export default WeatherDetails;