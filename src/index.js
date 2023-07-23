import React from 'react';
import { render } from "react-dom";
import { Modale } from "./lib/index";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Modale />
  </div>
);

render(<App />, document.getElementById("root"));
