import React from "react";

import ChatInput from "../ChatInput/ChatInput";
import Aux from "../utils/Aux";
import Modal from "../utils/Modal";
import SideBar from "../sideBar/sideBar"


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
      messages:[],
      me: "",
      users: []
    };
  }

  componentWillMount() {
    this.initSocket(this.state.url);

    ChatStore.on("new-message", msg => {
      if(){

      }else{
        this.io.emit("chat-message", msg);
      }
      this.setState({messages: ChatStore.state.messages})
    });

    ChatStore.on("new-user", user => {
      this.io.emit("new-user-server", user)
      //this.setState({me: ChatStore.state.me})
    });
    
    //messages comming from other users
    this.io.on("chat-message-new", msg => {
      ChatStore.addReceivedMsg(msg , () => {
        this.setState({messages: ChatStore.state.messages})
      });
      console.log("received object " , msg)
      console.log(ChatStore.state.messages);
    });

    this.io.on("new-user-connected", user => {
      console.log(user);
      ChatStore.addReceivedUser(user);
      console.log(ChatStore.state.activeUsers);
    });

    this.io.on("old-users", user => {
      console.log(user);
      ChatStore.appendOldUsers(user);
      console.log( "old users appended" + ChatStore.state.activeUsers);
    });
  }

  initSocket = url => {
    this.io = io(url);
  };

  render() {
    return (
      <Aux>
        <Modal ChatStore={ChatStore} />
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight SideBar">
            <SideBar me={this.state.me} />
          </div>
          <div class="p-2 flex-grow-1 bd-highlight MainBar">
            Main Area
            <ChatInput ChatStore={ChatStore} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default main;
