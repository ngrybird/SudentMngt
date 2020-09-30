import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../NavBar";

describe("<NavBar/>", () => {
  const profile = {
    name: "Cody Simmons",
    position: "Lecturer"
  };
  it("Verify Name on the profile", () => {
    const { container, getAllByTestId } = render(<NavBar {...profile} />);

    const profileName = getAllByTestId("id-profile-name");

    expect(profileName[0].innerHTML).toEqual("Cody Simmons");

    expect(container).toMatchSnapshot();
  });
});
