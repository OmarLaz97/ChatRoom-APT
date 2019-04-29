import React from "react";

class sideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  componentWillMount() {
    this.setState({ username: this.props.me });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ username: nextProps.me });
  }

  render() {
    return (
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight"> <h1>
            {this.state.username}
        </h1></div>
        <div class="p-2 bd-highlight">The Rest of the users</div>
      </div>
    );
  }
}

export default sideBar;
