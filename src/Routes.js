import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/post/index";
import Board from "./pages/board/index";

const routing = (props) => {
  return (
    <Routes>
      <Route path="/post/:post_id" element={<Post />}></Route>
      <Route path="/channel" exact></Route>
      <Route path="/board" exact element={<Board />}></Route>
    </Routes>
  );
};

export default routing;
