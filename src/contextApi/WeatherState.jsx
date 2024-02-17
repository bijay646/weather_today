import React, { useEffect, useState } from "react";

import WeatherContext from "./WeatherContext";
import WeatherApi from "../api/Weather/WeatherApi";

const WeatherState = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [hourlyData, setHourlyData] = useState({});

  let filter = {
    key: "2f7c9653d88c4b07ac1165246241502",
    q: "kathmandu",
    days: 5,
  };

  const getWeatherData = async () => {
    const { data } = await WeatherApi.getWeatherData(filter);
    setWeatherData(data);
  };

  useEffect(() => {
    const currentTime = weatherData?.location?.localtime;
    const hourlyInfo = weatherData?.forecast?.forecastday[0].hour || [];

    const filteredHourlyInfo = hourlyInfo.filter(
      (item) => new Date(item.time).getTime() > new Date(currentTime).getTime()
    );

    const hourlyData = filteredHourlyInfo.slice(0, 8);

    if (hourlyData.length < 8) {
      const nextDayHourlyInfo =
        weatherData?.forecast?.forecastday[1].hour || [];
      const remainingData = nextDayHourlyInfo.slice(0, 8 - hourlyData.length);
      setHourlyData([...hourlyData, ...remainingData]);
    } else {
      setHourlyData(hourlyData);
    }
  }, [weatherData]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, getWeatherData, hourlyData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
  S;
};

export default WeatherState;
