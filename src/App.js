import React, { Component } from "react";
import Pallete from "./Pallete";
//seedColors is an array
import seedColors from "./seedColors";

export class App extends Component {
  render() {
    return (
      <div>
        <Pallete {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
