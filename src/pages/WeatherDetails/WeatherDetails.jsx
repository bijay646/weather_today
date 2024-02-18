import React, { useContext } from "react";

import dayImage from "../../assets/images/day.jpg";
import nightImage from "../../assets/images/night.jpg";

import Layout from "../../components/Layout/Layout";
import WeatherContext from "../../contextApi/WeatherContext";
import DailyCard from "../../components/DailyCard/DailyCard";

const WeatherDetails = () => {
  const { weatherData, isDay } = useContext(WeatherContext);

  const layoutImage = isDay ? dayImage : nightImage;

  return (
    <Layout>
      <div
        className="weather-details-layout py-5"
        style={{
          backgroundImage: `url(${layoutImage})`,
          height: "auto",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center text-white px-4 my-5">
          <div className="row gap-3 justify-content-between ">
            <div className="col-12 col-md-5 current-weather-card rounded p-4">
              <h4>LOCAL WEATHER REPORT</h4>
              <hr />
              <div className="row mt-4">
                <div className="col">
                  <img
                    className="detail-weather-icon"
                    src={weatherData?.current?.condition.icon}
                    alt="weather icon"
                  />
                  <p>{weatherData?.current?.wind_mph} mph</p>
                </div>
                <div className="col">
                  <p className="mb-0 fw-medium ">
                    {weatherData?.location?.localtime}
                  </p>
                  <h3 className="fw-bold">
                    {weatherData?.current?.condition.text}
                  </h3>
                  <p className="fw-bold">
                    {weatherData?.current?.temp_c} &deg;C
                  </p>
                  <p className="fw-bold">
                    {weatherData?.current?.temp_f} &deg;F
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 current-weather-card rounded p-4">
              <h4>SEA FORECAST REPORT</h4>
              <hr />
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">WIND SPEED: </p>
                <p>{weatherData?.current?.wind_mph} mph</p>
              </div>
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">WIND DIRECTION: </p>
                <p>{weatherData?.current?.wind_dir}</p>
              </div>
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">PRESSURE: </p>
                <p>{weatherData?.current?.pressure_mb} mb</p>
              </div>
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">PRECIPITATION: </p>
                <p>{weatherData?.current?.precip_mm} mm</p>
              </div>
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">HUMIDITY: </p>
                <p>{weatherData?.current?.humidity}</p>
              </div>
              <div className="d-flex justify-content-around ">
                <p className="fw-bold">CLOUD: </p>
                <p>{weatherData?.current?.cloud} mph</p>
              </div>
            </div>
            <div className="col-12 my-5 ms-2">
              <div className="row daily-forecast-layout w-100 gap-3 rounded p-4">
                {weatherData?.forecast?.forecastday?.map((item, index) => (
                  <DailyCard dailyInfo={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeatherDetails;
