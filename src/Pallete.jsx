import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";

class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => {
      return <ColorBox background={color.color} name={color.name} />;
    });

    return (
      <div className="Pallete">
        {/* anvbar goes here */}
        <div className="Pallete-colors">
          {colorBoxes}
        </div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Pallete;
