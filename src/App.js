import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Routes from "./Routes";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
