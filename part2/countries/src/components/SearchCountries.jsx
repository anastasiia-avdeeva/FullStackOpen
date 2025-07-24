export const SearchCountries = ({ value, onChange }) => {
  return (
    <div>
      <h2>Search: </h2>
      <div>
        <label htmlFor="country-input">Find countries: </label>
        <input
          type="text"
          name="country-input"
          id="country-input"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
