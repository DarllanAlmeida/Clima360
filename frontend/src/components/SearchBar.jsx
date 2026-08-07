import React from "react";

function SearchBar({ city, setCity, onSearch }) {

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            onSearch();
        }

    };

    return (

        <div className="search-container">

            <input
                type="text"
                placeholder="Buscar ciudad..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button onClick={onSearch}>

                Buscar

            </button>

        </div>

    );

}

export default SearchBar;