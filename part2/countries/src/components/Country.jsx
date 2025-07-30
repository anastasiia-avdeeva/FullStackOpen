import { useState, useEffect } from "react";
import weatherService from "../services/weather";
import { CountryBasics } from "./CountryBasics";
import { Weather } from "./Weather";

export const Country = ({ info }) => {
  const [weather, setWeather] = useState(null);
  //   const [error, setError] = use(null);

  const langArray = Object.values(info.languages);

  useEffect(() => {
    weatherService
      .getCapitalWeather(info.capital[0])
      .then((weatherInfo) => setWeather(weatherInfo));
  }, [info.capital]);

  return (
    <article>
      <CountryBasics info={info} languages={langArray} />
      {weather && (
        <Weather weather={weather} weatherIconInfo={weather.weather[0]} />
      )}
    </article>
  );
};
