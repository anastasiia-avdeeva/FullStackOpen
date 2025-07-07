import React from "react";

export const TextBtn = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
