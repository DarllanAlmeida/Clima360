import React from "react";
import { getWeatherIcon } from "../utils/weatherIcons";

function ForecastItem({ day, unit }) {

    const Icon = getWeatherIcon(day.weather[0].main);

    const convertTemp = (temp) => {
        return unit === "C"
            ? Math.round(temp)
            : Math.round((temp * 9) / 5 + 32);
    };

    const date = new Date(day.dt_txt);

    const weekday = date.toLocaleDateString("es-ES", {
        weekday: "short"
    });

    return (

        <div className="forecast-item">

            <p className="forecast-day">
                {weekday}
            </p>

            <div className="forecast-icon">
                <Icon size={42} strokeWidth={2} />
            </div>

            <h3>
                {convertTemp(day.main.temp)}°
            </h3>

            <small>
                {day.weather[0].description}
            </small>

        </div>

    );

}

export default ForecastItem;