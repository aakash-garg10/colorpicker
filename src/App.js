import React, { Component } from "react";
import Pallete from "./Pallete";
//seedColors is an array
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[0]));
    return (
      <div>
        <Pallete pallete={generatePalette(seedColors[2])} />
      </div>
    );
  }
}

export default App;
