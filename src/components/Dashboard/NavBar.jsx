import React from "react";
import profileAvatar from "../../images/avatar-header.png";
import vector from "../../images/Vector.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="profile">
          <span className="profile-info">
            <div className="profile-name" data-testid="id-profile-name">{this.props.name}</div>
            <div className="profile-designation">{this.props.position}</div>
          </span>
          <span className="profile-avatar">
            <img src={profileAvatar} height="50px" width="50px" alt="avatar" />
          </span>
          <span className="profile-more">
            <img src={vector} height="6px" width="12px" alt="avatar" />
          </span>
        </div>
      </div>
    );
  }
}
export default NavBar;
