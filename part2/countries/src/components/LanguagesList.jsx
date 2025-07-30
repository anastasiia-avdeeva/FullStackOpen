export const LanguagesList = ({ languages }) => {
  return (
    <div>
      <h4>{languages.length < 2 ? "Language:" : "Languages:"}</h4>
      {languages.length === 0 ? (
        <p>Unknown</p>
      ) : (
        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
