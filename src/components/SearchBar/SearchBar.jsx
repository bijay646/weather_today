import React from "react";

const SearchBar = ({ city, setCity, handleSearch }) => {
  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search-container mt-5 mb-3 d-flex gap-3 w-75 ">
      <input
        type="text"
        value={city}
        className="form-control search-box"
        placeholder="Enter a city name..."
        onChange={cityChangeHandler}
      />

      <button className="btn btn-primary search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
