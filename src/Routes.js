import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/index";
import Post from "./pages/post/index";
import Board from "./pages/board/index";

const routing = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/post/:post_id" element={<Post />}></Route>
      <Route path="/video/:video_seq" element={<Post />}></Route>
      <Route path="/channel/:channelCode" exact element={<Board />}></Route>
      <Route
        path="/channel/:channelCode/board/:board_id"
        exact
        element={<Board />}
      ></Route>
    </Routes>
  );
};

export default routing;
