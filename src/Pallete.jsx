import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";
import NavBar from "./Navbar";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
  }

  //function that sets level on the slider
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { level } = this.state;
    const { colors, paletteName, emoji } = this.props.pallete;
    //colors will be an array that contains many arrays of different shades of colors
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color.hex} name={color.name} />;
    });

    return (
      <div className="Pallete">
        {/* we are passing the lvl and changeLevel as we need to update them  */}
        <NavBar level={level} changeLevel={this.changeLevel} />
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Pallete;
