import { Button } from "./Button";

export const CountriesList = ({ countries, onShow }) => {
  return (
    <ul className="countries__list">
      {countries.map((country) => (
        <li key={country.cca3}>
          <span className="countries__name">{country.name.common} </span>
          <Button onClick={() => onShow(country)} text="Show" />
        </li>
      ))}
    </ul>
  );
};
