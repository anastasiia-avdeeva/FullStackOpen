import React from "react";

export const ImageContainer = ({ imgSrc, alt = "" }) => {
  return (
    <div>
      <img src={imgSrc} alt={alt} />
    </div>
  );
};
