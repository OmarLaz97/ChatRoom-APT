import React from "react";
import Bubble from "../utils/bubble/bubble";

import "./mainArea.css";

class mainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      me: "",
      users: []
    };
  }

  componentWillMount() {
    this.setState({ messages: this.props.msgs });
    this.setState({ me: this.props.me });
    this.setState({ users: this.props.users });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ messages: nextProps.msgs });
    this.setState({ me: nextProps.me });
    this.setState({ users: nextProps.users });
  }

  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3 fillAv mainbox">
        <div className="p-2 bd-highlight mainAreaUp">
          <h1>hello</h1>
        </div>
        <div className="p-2 bd-highlight msgArea">
          {this.state.messages.map(msg => {
            if (msg.user === this.state.me && msg.whisper === false) {
              return (
                <Bubble
                  msg={msg}
                  class="MineP sb13"
                  userClass="usernameBubbleM"
                  msgClass="msgBubbleM"
                />
              );
            } else if (msg.user === this.state.me && msg.whisper === true) {
              return (
                <Bubble
                  msg={msg}
                  class="sb15 MWhisper"
                  userClass="usernameBubbleM"
                  msgClass="msgBubbleM"
                />
              );
            } else if (msg.user !== this.state.me && msg.whisper === true) {
              return (
                <Bubble
                  msg={msg}
                  class="sb16 NWhisper"
                  userClass="usernameBubbleN"
                  msgClass="msgBubbleN"
                />
              );
            } else {
              return (
                <Bubble
                  msg={msg}
                  class="NMineP sb14"
                  userClass="usernameBubbleN"
                  msgClass="msgBubbleN"
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default mainArea;
