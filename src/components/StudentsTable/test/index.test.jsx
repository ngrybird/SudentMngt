import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StudentsTable from "../index";
import { studentsMarks } from "../../Dashboard/test/testData";

describe("<StudentsTable/>", () => {
  it("Verify Students table is rendered", () => {
    const { container, getByText, getAllByTestId } = render(
      <StudentsTable records={studentsMarks} />
    );
    const tableHeader = getByText("Students by average marks");
    const allRows = getAllByTestId("student-row");
    expect(allRows.length).toEqual(7);
    expect(tableHeader).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("simulate click to arrange list in ascending order", async () => {
    const { container, getByText, getAllByTestId } = render(
      <StudentsTable records={studentsMarks} />
    );

    fireEvent.click(getByText("Descending"));
    const allRows = getAllByTestId("student-row");

    // const newButton = getByText("Ascending");
    // expect(newButton).toBeInTheDocument();
  });
});
