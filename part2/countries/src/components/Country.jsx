import { CountryBasics } from "./CountryBasics";
import { Weather } from "./Weather";

export const Country = ({ info }) => {
  const langArray = Object.values(info.languages);

  return (
    <article>
      <CountryBasics info={info} languages={langArray} />
      <Weather city={info.capital[0]} />
    </article>
  );
};
