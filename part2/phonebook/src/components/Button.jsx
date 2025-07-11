import React from "react";

export const Button = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};
