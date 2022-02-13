import React, { Component } from "react";
import Pallete from "./Pallete";
//seedColors is an array
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

import { Routes, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[0]));
    return (
      <div>
        <Routes>
          <Route path="/" element={<Pallete />} />
          <Route path="/palette/:paletteId" element={<Pallete />} />
          <Pallete pallete={generatePalette(seedColors[2])} />
        </Routes>
      </div>
    );
  }
}

export default App;
