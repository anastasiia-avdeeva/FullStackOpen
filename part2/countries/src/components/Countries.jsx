import { Country } from "./Country";
import { ErrorMsg } from "./ErrorMsg";

export const Countries = ({ countries }) => {
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
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      ) : (
        <Country info={countries[0]} />
      )}
    </div>
  );
};
