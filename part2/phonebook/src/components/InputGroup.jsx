export const InputGroup = ({ labelText, inputProps }) => {
  return (
    <div>
      <label htmlFor={inputProps.id}>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
};
