import React from "react";
import NavBar from "./NavBar";
import Section from "../Section";
import StudentsTable from "../StudentsTable";
import "./styles.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.sectionsData) {
    }
  }
  render() {
    return (
      <div className="dashboard-container">
        <NavBar {...this.props.userProfile} />
        <div className="dashboard-header">
          <div className="dashboard-text">Dashboard</div>
          <div className="dashboard-subtext">Mobile UX/UI Design Course</div>
        </div>
        <div className="all-sections">
          {this.props.sectionsData &&
            this.props.sectionsData.map(section => <Section {...section} />)}
        </div>
        {this.props.studentsMarks && (
          <StudentsTable records={this.props.studentsMarks} />
        )}
      </div>
    );
  }
}
export default Dashboard;
