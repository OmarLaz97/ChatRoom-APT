const EventEmitter = require("events").EventEmitter;

class ChatStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      messages: [],
      me: "",
      activeUsers: [],
      unique: false
    };
  }

  addMessage = msg => {
    // const message = {
    //   sender: this.state.me,
    //   data: msg
    // }
    // this.state.messages.push(message);
    this.emit("new-message", msg);
  };

  addUser = user => {
    //this.state.activeUsers.push(user);
    this.state.me = user;
    this.emit("new-user", user);
  };

  addReceivedMsg = msg => {
    this.state.messages.push(msg);
  };

  addReceivedUser = users => {
    //this.state.activeUsers.push(user);
    this.state.activeUsers = users;
  };

  appendOldUsers = users => {
    for (var i = 0; i < users.length; i++) {
      this.state.activeUsers.push(users[i]);
    }
  };
  addUserNameUnique = unique => {
    this.state.unique = unique;
  };
}

module.exports = new ChatStore();
