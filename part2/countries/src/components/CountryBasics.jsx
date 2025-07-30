import { ImageContainer } from "./ImageContainer";
import { LanguagesList } from "./LanguagesList";

export const CountryBasics = ({ info, languages }) => {
  return (
    <section>
      <h3>{info.name.common}</h3>
      <p>Capital: {info.capital};</p>
      <p>Area: {info.area};</p>
      <div>
        <h4>Languages:</h4>
        <LanguagesList languages={languages} />
      </div>
      <ImageContainer imgSrc={info.flags.png} alt={info.flags.png} />
    </section>
  );
};
