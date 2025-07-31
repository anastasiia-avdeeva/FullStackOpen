export const Button = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick} className="button">
      {text}
    </button>
  );
};
