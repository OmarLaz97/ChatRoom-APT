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
      users: [],
      unique: false,
      loggedout: null
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

    this.io.on("old-users", user => {
      console.log("old users" + user);
      ChatStore.appendOldUsers(user);
      // console.log("old users appended" + ChatStore.state.activeUsers);
      this.setState({ users: ChatStore.state.activeUsers });
    });

    this.io.on("whisper", msg => {
      ChatStore.addReceivedMsg(msg);
      this.setState({ messages: ChatStore.state.messages });
    });
  }

  initSocket = url => {
    this.io = io(url);
  };
  clickHandler = event => {
    console.log("disconnecting");
    this.io.emit("logout");
    this.setState({
      loggedout: <Modal ChatStore={ChatStore} />
    });
  };
  render() {
    return (
      <Aux>
        <Modal ChatStore={ChatStore} users={this.state.users} />

        <body>
          <div class="container-fluid h-100 ">
            <div class="col narrow-margin justify-content-flex-end">
              <button
                type="button"
                class="btn btn-lg btn-outline-secondary"
                onClick={this.clickHandler}
              >
                {" "}
                logout
              </button>
            </div>
            <div class="row justify-content-center h-100 ">
              <SideBar users={this.state.users} />

              <div class="col-md-8 col-xl-6 chat">
                <div class="card">
                  <MainArea
                    msgs={this.state.messages}
                    users={this.state.users}
                    me={this.state.me}
                  />
                  <ChatInput ChatStore={ChatStore} />
                  {this.state.loggedout}
                </div>
              </div>
            </div>
          </div>
        </body>
      </Aux>
    );
  }
}

export default main;
