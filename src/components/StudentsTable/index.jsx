import React from "react";
import StudentRow from "./StudentRow";
import "./styles.css";

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    const descendingList = this.props.records.sort((f, s) => s.marks - f.marks);
    this.state = {
      listArrangement: "Descending",
      studentRecords: [...descendingList]
    };
  }
  handleSort = e => {
    console.log(e.target.innerText);
    const newState = {
      listArrangement:
        e.target.innerText === "Descending" ? "Ascending" : "Descending",
      studentRecords: this.state.studentRecords.reverse()
    };
    this.setState({ ...newState });
  };
  render() {
    console.log(this.state);
    return (
      <div className="table-container">
        <div className="table-header">
          <span>Students by average marks</span>
          <button onClick={this.handleSort}>
            {this.state.listArrangement}
          </button>
        </div>
        <hr />
        <div className="student-list">
          {this.state.studentRecords.map((records, i) => (
            <StudentRow key={i} {...records} />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentsTable;
