import React from "react";
import Ellipsis from "../../images/Ellipse.png";
class StudentRow extends React.Component {
  render() {
    return (
      <div className="table-row" data-testid="student-row">
        <span>
          <img src={Ellipsis} height="40px" width="40px" />
        </span>
        <span className="row-title">{this.props.name}</span>
        <span className="row-marks">{this.props.marks}</span>
      </div>
    );
  }
}
export default StudentRow;
