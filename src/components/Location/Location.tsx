import React, { Component } from "react";

export default class Location extends Component<{ location: string }> {
  shouldComponentUpdate(nextProps: { location: string }): boolean {
    return nextProps.location !== this.props.location;
  }

  render() {
    return <div>Позиция нажатого квадратика - {this.props.location}</div>;
  }
}
