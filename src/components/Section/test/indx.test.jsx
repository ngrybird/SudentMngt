import React from "react";
import { render } from "@testing-library/react";
import Section from "../index";
import { sectionsData } from "../../Dashboard/test/testData";

describe("<Section/>", () => {
  it("Verify Section title and subtitle for section", () => {
    const { container, getByText } = render(<Section {...sectionsData[0]} />);

    const sectionTitle = getByText("62");
    const sectionSubtitle = getByText("Students");

    expect(sectionTitle).toBeInTheDocument();
    expect(sectionSubtitle).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
