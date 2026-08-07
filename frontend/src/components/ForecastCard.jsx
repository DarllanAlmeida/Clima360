import React from "react";
import ForecastItem from "./ForecastItem";

function ForecastCard({ forecast }) {

    if(!forecast) return null;

    // Elegimos un registro por día (aprox. 12:00)
    const daily = forecast.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    return (

        <div className="forecast-card">

            <h2>

                Próximos 5 días

            </h2>

            <div className="forecast-grid">

                {daily.slice(0,5).map((day,index)=>(
                    <ForecastItem
                        key={index}
                        day={day}
                    />
                ))}

            </div>

        </div>

    );

}

export default ForecastCard;