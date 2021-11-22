import React from "react";
import Cell from "./Cell";

export default {
  title: "Мои компоненты/Cell",
  component: Cell,
};

export const oneCell = (args: any) => <Cell {...args} />;

oneCell.args = {
  onOff: 0,
};
