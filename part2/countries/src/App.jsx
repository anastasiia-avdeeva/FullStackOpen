import { useState, useEffect } from "react";
import countriesService from "./services/countries";
import { Countries } from "./components/Countries";
import { SearchCountries } from "./components/SearchCountries";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [userSearchValue, setUserSearchValue] = useState("");
  // const [fetchError, setFetchError] = useState("");

  const countriesShown = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(userSearchValue.toLowerCase())
  );

  useEffect(() => {
    countriesService.fetchAllCountries().then((newCountries) => {
      setAllCountries(newCountries);
    });
  }, []);

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    setUserSearchValue(inputValue);
  };
  return (
    <>
      <h1>Countries</h1>
      <SearchCountries value={userSearchValue} onChange={handleInputChange} />
      <Countries countries={countriesShown} />
    </>
  );
}

export default App;
