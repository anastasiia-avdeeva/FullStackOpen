export const LanguagesList = ({ languages }) => {
  let content;

  if (languages.length === 0) {
    content = <p>Unknown</p>;
  } else if (languages.length === 1) {
    content = <p>{languages[0]}</p>;
  } else {
    content = (
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h4>{languages.length < 2 ? "Language:" : "Languages:"}</h4>
      {content}
    </div>
  );
};
