import React from "react";

export const TextBtn = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
