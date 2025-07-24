export const LanguagesList = ({ languages }) => {
  return (
    <>
      {languages.length === 0 ? (
        <p>Unknown</p>
      ) : (
        <ul>
          {languages.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
      )}
    </>
  );
};
