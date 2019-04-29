import React from "react";

import ChatInput from "../ChatInput/ChatInput";
import Aux from "../utils/wrapper";
import Modal from "../utils/Modal";
import SideBar from "../sideBar/sideBar";
import MainArea from "../mainArea/mainArea";

import "./main.css";
// import "../../main.css";
// import "../../framework.css";

const io = require("socket.io-client");
let ChatStore = require("../../chatStore/chatStore");

class main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://apt-omar-laz.c9users.io",
      messages: [],
      me: "",
      users: []
    };
  }

  componentWillMount() {
    this.initSocket(this.state.url);

    ChatStore.on("new-message", msg => {
      this.io.emit("chat-message", msg);

      this.setState({ messages: ChatStore.state.messages });
    });

    ChatStore.on("new-user", user => {
      this.io.emit("new-user-server", user);
      this.setState({ me: ChatStore.state.me });
    });

    //messages comming from other users
    this.io.on("chat-message-new", msg => {
      ChatStore.addReceivedMsg(msg);
      this.setState({ messages: ChatStore.state.messages });
    });

    this.io.on("new-user-connected", user => {
      ChatStore.addReceivedUser(user);
      this.setState({ users: ChatStore.state.activeUsers });
    });

    // this.io.on("old-users", user => {
    //   console.log(user);
    //   ChatStore.appendOldUsers(user);
    //   console.log("old users appended" + ChatStore.state.activeUsers);
    // });

    this.io.on("whisper", msg => {
      ChatStore.addReceivedMsg(msg);
      this.setState({ messages: ChatStore.state.messages });
    });
  }

  initSocket = url => {
    this.io = io(url);
  };

  render() {
    console.log(this.state.messages);
    return (
      <Aux>
        <Modal ChatStore={ChatStore} />
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight SideBar">
            <SideBar users={this.state.users} />
          </div>
          <div class="p-2 flex-grow-1 bd-highlight MainBar">
            <ChatInput ChatStore={ChatStore} />
            <MainArea
              msgs={this.state.messages}
              users={this.state.users}
              me={this.state.me}
            />
          </div>
        </div>
      </Aux>
    );
  }
}

export default main;
