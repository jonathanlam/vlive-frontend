import React from "react";

const HeartIcon = ({ liked }) => {
  // default unliked
  var color = "none";
  var stroke = "#2B2B2E";

  if (liked) {
    color = "#F91880";
    stroke = "none";
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 25">
      <path
        fill={color}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.9 6.13c-.944-.962-2.199-1.488-3.534-1.488-1.336 0-2.592.526-3.537 1.488L12.087 7.9l-1.748-1.77c-.945-.962-2.201-1.488-3.535-1.488s-2.59.526-3.533 1.487c-1.96 1.989-1.96 5.227-.002 7.219l8.163 8.165c.35.352.92.352 1.272 0 0 0 0 0 0 0l8.442-8.443h0c1.717-1.978 1.624-5.041-.246-6.94z"
      ></path>
    </svg>
  );
};

export default HeartIcon;
