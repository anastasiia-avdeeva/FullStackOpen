export const Notification = ({ className, msg }) => {
  if (!msg) return null;
  let classNames = "notification";
  if (className) classNames += ` ${className}`;
  return <p className={classNames}>{msg}</p>;
};
