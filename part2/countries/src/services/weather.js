import axios from "axios";

const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const openWeatherBaseURL = "https://api.openweathermap.org";
const weatherEndpointUrl = `${openWeatherBaseURL}/data/2.5/weather`;

const defaultParams = { units: "metric", appid: ApiKey };

const getCapitalWeather = (capital) => {
  const request = axios.get(weatherEndpointUrl, {
    params: { q: capital, ...defaultParams },
  });
  return request.then((response) => response.data);
};

export default { getCapitalWeather };
