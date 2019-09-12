import React from "react";

const SVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon
      points="100,10 40,198 190,78 10,78 160,198"
      style={{
        fill: "lime",
        stroke: "purple",
        strokeWidth: 5,
        fillRule: "nonzero"
      }}
    />
  </svg>
);

export default SVG;
