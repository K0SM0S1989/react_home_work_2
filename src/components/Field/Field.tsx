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
    const row1 = [0, 1, 0, 0, 1];
    const row2 = [0, 1, 0, 0, 1];
    const row3 = [0, 0, 0, 1, 1];
    const row4 = [1, 0, 1, 0, 1];
    const row5 = [0, 0, 0, 0, 1];
    this.state = {
      data: [row1, row2, row3, row4, row5],
      columnNumber: 0,
      rowNumber: 0,
    };
  }

  setLocation = (columnNumber: number, rowNumber: number): void => {
    this.setState({ columnNumber });
    this.setState({ rowNumber });
  };

  getLocation = (): string => {
    return `[${this.state.columnNumber}] [${this.state.rowNumber}]`;
  };

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
