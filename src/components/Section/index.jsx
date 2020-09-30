import React from "react";
import "./styles.css";
import Elipsis from "../../images/Ellipse.png";
import userIcon from "../../images/user.png";
import thunderIcon from "../../images/thunder.png";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      icon: this.props.title === "Students" ? userIcon : thunderIcon
    };
  }
  render() {
    return (
      <div className="section-container" data-testid="custom-sections">
        <div className="section-data">
          <span>
            <img src={Elipsis} />
            <img src={this.state.icon} className="hover-image" />
          </span>
          <div className="section-title">
            {this.state.line1}
            {this.state.line2 && (
              <span className="section-subtext">{this.state.line2}</span>
            )}
          </div>
          <div className="section-subtitle">{this.state.title}</div>
        </div>
      </div>
    );
  }
}

export default Section;
