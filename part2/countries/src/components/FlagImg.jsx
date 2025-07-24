export const FlagImg = ({ flag }) => {
  const { png: imgSrc, alt = "" } = flag;
  return (
    <div>
      <img src={imgSrc} alt={alt} />
    </div>
  );
};
