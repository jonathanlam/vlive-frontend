import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./heart.css";

const Heart = () => {
  const flows = ["flowOne", "flowTwo", "flowThree"];

  const colours = [
    "#847bb9",
    "#FF5733",
    "#fce473",
    "#f68b39",
    "#ed6c63",
    "#97cd76",
    "#35b1d1",
  ];
  const colour = colours[Math.floor(Math.random() * 6)];

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ttl = (Math.random() * 2 + 1.2).toFixed(1) * 900;
    const timer = setTimeout(() => {
      setVisible(false);
    }, ttl);
    return () => clearTimeout(timer);
  }, []);

  const flow = flows[Math.floor(Math.random() * 3)];

  if (!visible) return <div></div>;

  return (
    <div
      className="heart"
      style={{
        color: colour,
        fontSize: Math.floor(Math.random() * (50 - 22) + 22),
        animation: `${flow} 3s linear`,
      }}
    >
      <i className="fa fa-heart"></i>
    </div>
  );
};

const Hearts = () => {
  const [hearts, setHearts] = useState([]);

  function addHeart() {
    setHearts([...hearts, <Heart />]);
  }

  return (
    <>
      <Fab
        size="medium"
        sx={{
          backgroundColor: "#FF4C51",
          //color: "danger",
          position: "fixed",
          bottom: 20,
          right: 20,
          display: { xs: "block", md: "none" },
        }}
        onClick={addHeart}
      >
        <FavoriteIcon />
      </Fab>
      <div
        style={{
          height: "600px",
          position: "fixed",
          bottom: 20,
          right: 80,
        }}
      >
        {hearts.map((h, key) => h)}
      </div>
    </>
  );
};

export default Hearts;
