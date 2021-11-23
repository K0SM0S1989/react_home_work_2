import React from "react";
import Location from "./Location";

export default {
  title: "Мои компоненты/Location",
  component: Location,
};

export const location = (args: any) => <Location {...args} />;

location.args = {
  location: "Some text",
};
