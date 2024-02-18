import React, { useContext, useEffect, useState } from "react";

import dayImage from "../../assets/images/day.jpg";
import nightImage from "../../assets/images/night.jpg";

import HourlyCard from "../../components/HourlyCard/HourlyCard";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";

import WeatherContext from "../../contextApi/WeatherContext";

import HomeSkeleton from "./HomeSkeleton";

const Home = () => {
  const {
    isDay,
    weatherData,
    getWeatherData,
    hourlyData,
    error,
    initialRender,
    setInitialRender,
    isLoading,
  } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const layoutImage = isDay ? dayImage : nightImage;

  const handleSearch = async (e) => {
    e.preventDefault();

    const result = await getWeatherData(city);

    if (result.success) setCity("");
  };

  const searchErrorText = error && (
    <p className="my-2 fw-medium fs-5 text-danger">{error}</p>
  );

  useEffect(() => {
    if (initialRender) return;

    (async () => {
      setInitialRender(true);
      const result = await getWeatherData(city);

      if (result.success) setCity("");
    })();
  }, []);

  return (
    <Layout>
      <div
        className="home-page-layout py-5"
        style={{
          backgroundImage: `url(${layoutImage})`,
          height: "auto",
          backgroundSize: "cover",
        }}
      >
        {isLoading && !initialRender ? (
          <HomeSkeleton />
        ) : (
          <div
            className={`container text-center  d-flex flex-column align-items-center ${
              !isDay && "text-white"
            }`}
          >
            <SearchBar
              city={city}
              setCity={setCity}
              handleSearch={handleSearch}
            />
            {searchErrorText}
            <img
              className="title-weather-icon"
              src={weatherData?.current?.condition.icon}
              alt="weather icon"
            />
            <h1 className="weather-condition-text">
              {weatherData?.current?.condition.text}
            </h1>
            <p className="my-0 fs-5">{weatherData?.location?.name}</p>
            <p className="mb-0">{weatherData?.location?.localtime}</p>
            <p className="d-flex align-items-start title-temperature-text">
              <span>{weatherData?.current?.temp_c}</span>
              <span>&deg;</span>
            </p>
            <p className="weather-hourly-text">Hourly Forecast</p>
            <div className="row hourly-forecast-layout w-100 gap-3">
              {hourlyData.length > 0 &&
                hourlyData.map((item, index) => (
                  <HourlyCard isDay={isDay} hourlyInfo={item} key={index} />
                ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
