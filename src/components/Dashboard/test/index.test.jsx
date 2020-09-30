import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "../index";
import { sectionsData, studentsMarks } from "./testData";

describe("<Dashboard/>", () => {
  const profile = {
    name: "Cody Simmons",
    position: "Lecturer"
  };
  it("check static elements on dashboard", () => {
    const { container, getByText, getAllByTestId } = render(
      <Dashboard
        userProfile={profile}
        sectionsData={sectionsData}
        studentsMarks={studentsMarks}
      />
    );
    const dashboardText = getByText("Dashboard");
    const USTitle = getByText("Mobile UX/UI Design Course");
    const sections = getAllByTestId("custom-sections");
    const profileName = getAllByTestId("id-profile-name");

    expect(dashboardText).toBeInTheDocument();
    expect(USTitle).toBeInTheDocument();
    expect(sections.length).toEqual(3);
    expect(profileName[0].innerHTML).toEqual("Cody Simmons");

    expect(container).toMatchSnapshot();
  });
});
