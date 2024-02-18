import React from "react";

const HourlyCard = ({ isDay, hourlyInfo }) => {
  return (
    <div
      className={`${
        isDay ? "day-hourly-card" : "night-hourly-card"
      } col d-flex justify-content-center  align-items-center flex-column p-3 rounded-3 g-6`}
    >
      <p>{new Date(hourlyInfo.time).toLocaleTimeString()}</p>
      <img src={hourlyInfo.condition.icon} />
      <p className="d-flex align-items-start">
        <span>{hourlyInfo.temp_c}</span>
        <span>&deg;</span>
      </p>
    </div>
  );
};

export default HourlyCard;
