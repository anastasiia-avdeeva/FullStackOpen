import { FlagImg } from "./FlagImg";
import { LanguagesList } from "./LanguagesList";

export const Country = ({ info }) => {
  console.log(info.languages);
  const langArray = Object.values(info.languages);
  return (
    <div>
      <h3>{info.name.common}</h3>
      <p>Capital: {info.capital}</p>
      <p>Area: {info.area}</p>
      <h4>Languages:</h4>
      <LanguagesList languages={langArray} />
      <FlagImg flag={info.flags} />
    </div>
  );
};
