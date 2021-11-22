import React from "react";
import Cell, { CellProps } from "./Cell";

export default {
  title: "Мои компоненты/Cell",
  component: Cell,
};

export const oneCell = (args: CellProps) => <Cell {...args} />;

oneCell.args = {
  onOff: 0,
};
