import React from "react";
import Location from "./Location";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Field", () => {
  it("test Field", () => {
    const getLocation = "some location";
    render(<Location location={getLocation} />);
    expect(
      screen.queryByText(/позиция нажатого квадратика - some location/i)
    ).toBeInTheDocument();
    screen.debug();
  });
});
