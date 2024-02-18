import React, { useEffect, useState } from "react";

import WeatherContext from "./WeatherContext";
import WeatherApi from "../api/Weather/WeatherApi";

const WeatherState = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [hourlyData, setHourlyData] = useState({});
  const [isDay, setIsDay] = useState(true);
  const [initialRender, setInitialRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let filter = {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    q: "kathmandu",
    days: 5,
  };

  const updateFilter = (prop, value) => ({ ...filter, [prop]: value });

  const getWeatherData = async (cityName) => {
    setIsLoading(true);
    setError("");

    const updatedFilter = cityName
      ? updateFilter("q", cityName)
      : { ...filter };

    const storedData = localStorage.getItem("cityName");

    if (storedData === cityName) return;

    try {
      const { data } = await WeatherApi.getWeatherData(updatedFilter);
      setWeatherData(data);

      if (cityName) localStorage.setItem("cityName", cityName);

      setIsLoading(false);

      return {
        success: true,
        messsage: "",
      };
    } catch (err) {
      setError(err?.response?.data.error.message);
      setIsLoading(false);
      return {
        success: false,
        message: error?.response?.data.error.message,
      };
    }
  };

  const checkDayTime = (hour) => {
    if (hour >= 6 && hour < 18) setIsDay(true);
    else setIsDay(false);
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

    const currentHour = new Date(currentTime).getHours();

    checkDayTime(currentHour);
  }, [weatherData]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        getWeatherData,
        hourlyData,
        error,
        initialRender,
        setInitialRender,
        isDay,
        isLoading,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
