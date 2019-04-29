import React from "react";
import "./ChatInput.css";

class chatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: ""
    };
  }

  sendMsg = e => {
    e.preventDefault();
    this.props.ChatStore.addMessage(this.state.msg);
    console.log(this.props.ChatStore.state.messages)
  };

  msgChanged = e => {
    const clone = {
      ...this.state
    };
    clone.msg = e.target.value;
    this.setState({ msg: clone.msg });
  };

  render() {
    return (
      <div class="input-group mb-3 chat-input">
        <input
          type="text"
          class="form-control"
          placeholder="Type your message..."
          aria-label="Type your message..."
          aria-describedby="button-addon2"
          onChange={this.msgChanged}
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.sendMsg}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default chatInput;
