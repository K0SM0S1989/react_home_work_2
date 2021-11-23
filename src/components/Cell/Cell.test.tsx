import React from "react";
import Cell from "./Cell";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Cell", () => {
  it("on Cell", () => {
    const onOff = 1;
    const classCellOn = "cell_on";
    const setLocation = jest.fn();
    const { container } = render(
      <Cell setLocation={setLocation} onOff={onOff} />
    );
    expect(container.firstChild).toHaveClass(classCellOn);
    screen.debug();
  });
  it("off Cell ", () => {
    const onOff = 0;
    const classCellOn = "cell_on";
    const setLocation = jest.fn();
    const { container } = render(
      <Cell setLocation={setLocation} onOff={onOff} />
    );
    expect(container.firstChild).not.toHaveClass(classCellOn);
    screen.debug();
  });
  it("Cell click", () => {
    const setLocation = jest.fn();
    const onOff = 0;
    render(<Cell setLocation={setLocation} onOff={onOff} />);
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(setLocation).toHaveBeenCalled();
  });

  it("Cell no click", () => {
    const setLocation = jest.fn();
    const onOff = 0;
    render(<Cell setLocation={setLocation} onOff={onOff} />);
    expect(setLocation).not.toHaveBeenCalled();
  });
});
