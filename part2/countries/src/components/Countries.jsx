import { useEffect, useState } from "react";
import { Country } from "./Country";
import { ErrorMsg } from "./ErrorMsg";
import { Button } from "./Button";
import { CountriesList } from "./CountriesList";

export const Countries = ({ countries, searchValue }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [searchValue]);

  const handleShowBtnClick = (country) => setSelectedCountry(country);

  const handleBackBtnClick = () => setSelectedCountry(null);

  if (selectedCountry) {
    return (
      <section className="countries">
        <Button onClick={handleBackBtnClick} text="Back" />
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
          "Too many countries match the search. Please, specify the search request!"
        }
      />
    );
  } else {
    content = (
      <CountriesList countries={countries} onShow={handleShowBtnClick} />
    );
  }

  return (
    <section className="countries">
      <h2 className="subtitle">Search results:</h2>
      {content}
    </section>
  );
};
