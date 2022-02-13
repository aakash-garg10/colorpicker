import React, { Component } from "react";
import Pallete from "./Pallete";
//seedColors is an array
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Routes, Route, Link } from "react-router-dom";

export class App extends Component {
  //findPalette is a function that takes in a palette id and returns the palette with that id
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    // console.log(generatePalette(seedColors[0]));
    return (
      <div>
        <Routes>
          <Route
            exact
            path="/"
            render={() => <h1>PALETTE LIST GOES HERE</h1>}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Pallete
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Routes>
        {/* this was previously used to render before the use of react router dom */}
        {/* <Pallete pallete={generatePalette(seedColors[2])} /> */}
      </div>
    );
  }
}

export default App;
