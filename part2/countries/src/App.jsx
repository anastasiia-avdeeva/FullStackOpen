import { useState, useEffect } from "react";
import countriesService from "./services/countries";
import { Countries } from "./components/Countries";
import { SearchCountries } from "./components/SearchCountries";
import { ErrorMsg } from "./components/ErrorMsg";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [userSearchValue, setUserSearchValue] = useState("");
  const [fetchError, setFetchError] = useState("");

  const countriesShown = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(userSearchValue.toLowerCase())
  );

  useEffect(() => {
    countriesService
      .fetchAllCountries()
      .then((newCountries) => setAllCountries(newCountries))
      .catch((error) => {
        console.log("cannot fetch countries array from the server", error);
        setFetchError(
          "Cannot get countries from the server 😞 Please, try again later!"
        );
      });
  }, []);

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    setUserSearchValue(inputValue);
  };

  return (
    <>
      <h1>Countries</h1>
      {fetchError ? (
        <ErrorMsg text={fetchError} />
      ) : (
        <>
          <SearchCountries
            value={userSearchValue}
            onChange={handleInputChange}
          />
          <Countries countries={countriesShown} searchValue={userSearchValue} />
        </>
      )}
    </>
  );
}

export default App;
