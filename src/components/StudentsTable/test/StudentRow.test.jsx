import React from "react";
import { render } from "@testing-library/react";
import StudentRow from "../StudentRow";
import { studentsMarks } from "../../Dashboard/test/testData";

describe("<StudentRow/>", () => {
  it("Verify Students details are rendered", () => {
    const { container, getByText } = render(
      <StudentRow {...studentsMarks[0]} />
    );

    const studentName = getByText("Annete Watson");
    const marks = getByText("9.3");

    expect(studentName).toBeInTheDocument();
    expect(marks).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
