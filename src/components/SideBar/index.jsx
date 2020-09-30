import React from "react";
import logo from "../../images/logo.png";
import "./styles.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={logo} height="54px" width="54px" alt="logo" />
        </div>
      </div>
    );
  }
}
export default SideBar;
