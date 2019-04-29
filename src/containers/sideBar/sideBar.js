import React from "react";
import UserStrip from "../utils/userStrip/userStrip"
import "./sideBar.css"
class sideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.setState({ users: this.props.users });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }

  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3 fillAv">
        <div className="p-2 bd-highlight userNameBar">
          <h3>Online Users</h3>
        </div>
        <div className="p-2 bd-highlight">
          {this.state.users.map(onlineUser => (
              <UserStrip  userName={onlineUser} />
            ))}
        </div>
      </div>
    );
  }
}

export default sideBar;
