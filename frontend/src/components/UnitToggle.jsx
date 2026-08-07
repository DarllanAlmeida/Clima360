import React from "react";

function UnitToggle({ unit, setUnit }) {

    return (

        <div className="unit-toggle">

            <span className="unit-label">
                🌡️
            </span>

            <button
                className={unit === "C" ? "active" : ""}
                onClick={() => setUnit("C")}
            >
                °C
            </button>

            <button
                className={unit === "F" ? "active" : ""}
                onClick={() => setUnit("F")}
            >
                °F
            </button>

        </div>

    );

}

export default UnitToggle;