import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const allCountriesURL = `${baseUrl}/all`;
// const countryURL = `${baseUrl}name/`;

const fetchAllCountries = () => {
  const request = axios.get(allCountriesURL);
  return request.then((response) => response.data);
};

export default { fetchAllCountries };
