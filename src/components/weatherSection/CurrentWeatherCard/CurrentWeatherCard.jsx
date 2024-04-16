
import React from "react";


const CurrentWeatherCard = ({ currentWeather }) => {

  return (
    <div className="current-weather-card">
      <h2>CurrentWeatherCard</h2>
      <h3>{currentWeather.detailedForecast}</h3>
      <h3>{currentWeather.temperature}°{currentWeather.temperatureUnit}</h3>
      <h3>{currentWeather.shortForecast}</h3> 
      <h3>Windspeed {currentWeather.windSpeed}</h3> 
    </div>
  );
};

export default CurrentWeatherCard;
