import React from "react";
import { render } from "@testing-library/react";
import SideBar from "../index";

describe("<SideBar/>", () => {
  it("Verify sidebar rendered", () => {
    const { container } = render(<SideBar />);

    expect(container).toMatchSnapshot();
  });
});
