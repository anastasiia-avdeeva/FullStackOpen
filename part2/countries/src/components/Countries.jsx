import { useState } from "react";
import { Country } from "./Country";
import { ErrorMsg } from "./ErrorMsg";

export const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowBtnClick = (cca3) =>
    setSelectedCountry(countries.find((country) => country.cca3 === cca3));

  const handleBackBtnClick = () => setSelectedCountry(null);

  if (selectedCountry) {
    return (
      <div>
        <button onClick={handleBackBtnClick}>Back</button>
        <Country info={selectedCountry} />
      </div>
    );
  }

  let errorMsg = "";

  if (countries.length === 0) {
    errorMsg = "No country matches this search request 😞";
  } else if (countries.length > 10) {
    errorMsg = "Too many matches. Please, specify search request!";
  }
  return (
    <div>
      <h2>Results:</h2>
      {errorMsg ? (
        <ErrorMsg text={errorMsg} />
      ) : countries.length > 1 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => handleShowBtnClick(country.cca3)}>
                Show
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Country info={countries[0]} />
      )}
    </div>
  );
};
