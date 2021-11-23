import React, { Component } from "react";
import "./cell.css";

export interface CellProps {
  setLocation: () => void;

  onOff: number;
}

export default class Cell extends Component<CellProps> {
  render() {
    let className = "cell_off";
    if (this.props.onOff === 1) {
      className += " cell_on";
    }
    return (
      <span
        role="button"
        onClick={this.props.setLocation}
        className={className}
      />
    );
  }
}
