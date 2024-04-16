import React from "react";

const DailyForecastCard = ({
  name,
  startTime,
  endTime,
  isDayTime,
  shortForecast,
  temperature,
  temperatureUnit,
  windDirection,
  windSpeed,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{temperature}°{temperatureUnit}</h3>
      <h3>{shortForecast}</h3>
    </>
  );
};

export default DailyForecastCard;