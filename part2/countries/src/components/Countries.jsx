import { useEffect, useState } from "react";
import { Country } from "./Country";
import { ErrorMsg } from "./ErrorMsg";

export const Countries = ({ countries, searchValue }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [searchValue]);

  const handleShowBtnClick = (country) => setSelectedCountry(country);

  const handleBackBtnClick = () => setSelectedCountry(null);

  if (selectedCountry) {
    return (
      <section>
        <button onClick={handleBackBtnClick}>Back</button>
        <Country info={selectedCountry} />
      </section>
    );
  }

  let content = null;

  if (countries.length === 0) {
    content = <ErrorMsg text={"No country matches this search request 😞"} />;
  } else if (countries.length === 1) {
    content = <Country info={countries[0]} />;
  } else if (countries.length > 10) {
    content = (
      <ErrorMsg
        text={
          "Too many countries matche the search. Please, specify search request!"
        }
      />
    );
  } else {
    content = (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}{" "}
            <button onClick={() => handleShowBtnClick(country)}>Show</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section>
      <h2>Search results:</h2>
      {content}
    </section>
  );
};
