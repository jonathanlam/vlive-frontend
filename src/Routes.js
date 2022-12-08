import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/index";
import Post from "./pages/post/index";
import Board from "./pages/board/index";
import About from "./pages/about/index";

const routing = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/post/:post_id" element={<Post />}></Route>
      <Route path="/channel/:artist_name" exact element={<Board />}></Route>
      <Route path="/about" exact element={<About />}></Route>
    </Routes>
  );
};

export default routing;
