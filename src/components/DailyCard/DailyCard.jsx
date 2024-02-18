import React from "react";

const DailyCard = ({ dailyInfo }) => {
  return (
    <div className="col daily-card d-flex justify-content-center  align-items-center flex-column p-3 g-6 rounded">
      <p className="my-0 fw-bolder">
        {new Date(dailyInfo.date).toLocaleDateString([], {
          weekday: "long",
        })}
      </p>
      <img
        className="daily-weather-icon"
        src={dailyInfo.day.condition.icon}
        alt="daily weather icon"
      />
      <p>
        {dailyInfo.day.maxtemp_c}&deg;/{dailyInfo.day.maxtemp_c}&deg;
      </p>
    </div>
  );
};

export default DailyCard;
