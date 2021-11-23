import React, { Component } from "react";
import Cell from "../Cell/Cell";
import "./field.css";
import Location from "../Location/Location";

interface FieldState {
  data: Array<Array<number>>;
  columnNumber: number;
  rowNumber: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Field extends Component<{}, FieldState> {
  constructor(props: never) {
    super(props);
    this.state = {
      data: [
        [0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
      ],
      columnNumber: 0,
      rowNumber: 0,
    };
    this.setLocation = this.setLocation.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  setLocation(columnNumber: number, rowNumber: number): void {
    this.setState({ columnNumber });
    this.setState({ rowNumber });
  }

  getLocation(): string {
    return `[${this.state.columnNumber}] [${this.state.rowNumber}]`;
  }

  componentDidMount() {
    console.log(
      "Field componentDidMount ; Координаты ячейки - " + this.getLocation()
    );
  }

  componentDidUpdate() {
    if (this.getLocation() === "[4] [4]") {
      const oldData = this.state.data;
      const row1 = [0, 0, 0, 0, 1];
      const row2 = [0, 1, 1, 0, 0];
      const newData = oldData;
      newData.push(row1);
      newData.push(row2);
      this.setState({
        data: newData,
        columnNumber: 0,
        rowNumber: 0,
      });
    }
  }

  componentWillUnmount() {
    console.log("Field componentWillUnmount");
  }

  render() {
    const cells = this.state.data.map((row: number[], columnIndex: number) => {
      const cell = row.map((c: number, rowIndex: number) => {
        return (
          <Cell
            setLocation={() => this.setLocation(columnIndex, rowIndex)}
            onOff={c}
          />
        );
      });
      return <div className="field_row">{cell}</div>;
    });
    return (
      <div>
        {cells}
        <Location location={this.getLocation()} />
      </div>
    );
  }
}
