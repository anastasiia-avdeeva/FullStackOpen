export const LanguagesList = ({ languages }) => {
  return (
    <>
      {languages.length === 0 ? (
        <p>Unknown</p>
      ) : (
        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      )}
    </>
  );
};
