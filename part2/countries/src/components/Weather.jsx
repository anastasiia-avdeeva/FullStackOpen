import { useState, useEffect } from "react";
import weatherService from "../services/weather";
import { ErrorMsg } from "./ErrorMsg";
import { ImageContainer } from "./ImageContainer";

export const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    weatherService
      .getCapitalWeather(city)
      .then((weatherInfo) => setWeather(weatherInfo))
      .catch((error) => {
        console.log(`Cannot get weather info for ${city}`, error);
        setWeatherError(
          "Cannot get weather from the server 😞 Please, try again later!"
        );
      });
  }, [city]);

  const iconInfo = weather?.weather?.[0];
  const iconSrc = iconInfo
    ? `https://openweathermap.org/img/wn/${iconInfo.icon}@2x.png`
    : null;
  const iconAlt = iconInfo ? `${iconInfo.description} icon` : "weather icon";

  return (
    <aside>
      <h4>Weather in {city}</h4>
      {weatherError && <ErrorMsg text={weatherError} />}
      {weather && (
        <>
          <p>Temperature {weather.main.temp} Celsius</p>
          {iconSrc && <ImageContainer imgSrc={iconSrc} alt={iconAlt} />}
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </aside>
  );
};
