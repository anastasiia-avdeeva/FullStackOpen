import { ImageContainer } from "./ImageContainer";

export const Weather = ({ weather, weatherIconInfo }) => {
  const iconSrc = `https://openweathermap.org/img/wn/${weatherIconInfo.icon}@2x.png`;
  const iconAlt = `${weatherIconInfo.description} icon`;
  return (
    <aside>
      <h4>Weather in {weather.name}</h4>
      <p>Temperature {weather.main.temp} Celsius</p>
      <ImageContainer imgSrc={iconSrc} alt={iconAlt} />
      <p>Wind {weather.wind.speed} m/s</p>
    </aside>
  );
};
