export const LanguagesList = ({ languages }) => {
  return (
    <div className="country__info">
      <h4>{languages.length < 2 ? "Language:" : "Languages:"}</h4>
      {languages.length === 0 ? (
        <p>Unknown</p>
      ) : (
        <ul className="country__language-list">
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
