import { ImageContainer } from "./ImageContainer";
import { LanguagesList } from "./LanguagesList";

export const CountryContent = ({ info, languages }) => {
  return (
    <section className="country__content">
      <h3 className="country__title">{info.name.common}</h3>
      <p className="country__info">Capital: {info.capital};</p>
      <p className="country__info">Area: {info.area};</p>
      <LanguagesList languages={languages} />
      <ImageContainer imgSrc={info.flags.png} alt={info.flags.png} />
    </section>
  );
};
