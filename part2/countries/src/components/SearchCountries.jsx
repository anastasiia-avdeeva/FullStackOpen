export const SearchCountries = ({ value, onChange }) => {
  return (
    <section className="search">
      <h2 className="subtitle">Search: </h2>
      <div>
        <label htmlFor="country-input" className="search__label">
          Find countries:{" "}
        </label>
        <input
          type="text"
          name="country-input"
          id="country-input"
          value={value}
          onChange={onChange}
          className="search__input"
        />
      </div>
    </section>
  );
};
