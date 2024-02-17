import React, { useContext, useEffect, useState } from "react";

import nightImage from "../../assets/images/night.jpg";

import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherContext from "../../contextApi/WeatherContext";

const Home = () => {
  const { weatherData, getWeatherData, hourlyData } =
    useContext(WeatherContext);
  const [city, setCity] = useState("kathmandu");

  const handleSearch = (e) => {
    e.preventDefault();

    getWeatherData();
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  useEffect(() => {}, [weatherData]);

  console.log(weatherData?.forecast?.forecastday?.[0].hour);

  return (
    <Layout>
      <div
        className="home-page-layout py-5"
        style={{
          backgroundImage: `url(${nightImage})`,
          height: "auto",
          backgroundSize: "cover",
        }}
      >
        <div className="container d-flex flex-column align-items-center">
          <SearchBar
            city={city}
            setCity={setCity}
            handleSearch={handleSearch}
          />
          <img
            className="title-weather-icon"
            src={weatherData?.current?.condition.icon}
            alt="weather icon"
          />
          <h1 className="text-white">{weatherData?.current?.condition.text}</h1>
          <p className="text-white my-0 ">{weatherData?.location?.name}</p>
          <p className="text-white mb-0">{weatherData?.location?.localtime}</p>
          <p className="text-white d-flex align-items-start title-temperature-text">
            <span>{weatherData?.current?.temp_c}</span>
            <span>&deg;</span>
          </p>
          <p className="text-white">Hourly Forecast</p>
          <div className="hourly-forecast-layout d-flex gap-2 flex-wrap justify-content-center">
            {hourlyData.length > 0 &&
              hourlyData.map((item) => (
                <div className="hourly-card d-flex justify-content-center  align-items-center flex-column shadow-lg p-3 rounded-3 ">
                  <p className="text-white">
                    {new Date(item.time).toLocaleTimeString()}
                  </p>
                  <img src={item.condition.icon} />
                  <p className="text-white d-flex align-items-start">
                    <span>{item.temp_c}</span>
                    <span>&deg;</span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
