import React, { Component } from "react";

export default class Location extends Component<{ location: string }> {
  constructor(props: { location: string }) {
    super(props);
  }
  render() {
    return <div>Позиция нажатого квадратика - {this.props.location}</div>;
  }
}
