import { CountryContent } from "./CountryContent";
import { Weather } from "./Weather";

export const Country = ({ info }) => {
  const langArray = Object.values(info.languages);

  return (
    <article className="country-weather">
      <CountryContent info={info} languages={langArray} />
      <Weather city={info.capital[0]} />
    </article>
  );
};
