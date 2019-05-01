import React, { Component } from "react";
import { Button, Modal, Tab } from "semantic-ui-react";

import "./Modal.css";
// import app from "firebase/app";
// import "firebase/auth";
import firebase from "../../Components/Firebase/Firebase";
const config = {
  apiKey: "AIzaSyCo_UWviUXuQWLZvHNhs6sAGFpj6fb5aqo",
  authDomain: "chat-room-ae5c0.firebaseapp.com",
  databaseURL: "https://chat-room-ae5c0.firebaseio.com",
  projectId: "chat-room-ae5c0",
  storageBucket: "chat-room-ae5c0.appspot.com",
  messagingSenderId: "707975687741"
};

class ModalExampleSize extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }
  state = {
    authOpen: true,
    nicknameOpen: false,
    nickname: "",
    email: "",
    password: "",
    loginErrorMessage: "",
    signupErrorMessage: "",
    disabled: true
  };

  close = () => {
    this.props.ChatStore.addUser(this.state.nickname);
    this.setState({ nicknameOpen: false });
  };

  nicknameChangedHandler = e => {
    e.preventDefault();
    const clone = {
      ...this.state
    };

    clone.nickname = e.target.value;
    this.props.ChatStore.checkNickname(clone.nickname);
    console.log(this.props.ChatStore.getUnique());
    if (e.target.value != "" && this.props.ChatStore.getUnique()) {
      clone.disabled = false;
    } else {
      clone.disabled = true;
    }

    this.setState({ nickname: clone.nickname });
    this.setState({ disabled: clone.disabled });
  };
  emailChangedHandler = e => {
    e.preventDefault();
    const clone = {
      ...this.state
    };

    clone.email = e.target.value;
    if (e.target.value != "") {
      clone.disabled = false;
    } else {
      clone.disabled = true;
    }
    this.setState({ email: clone.email });
    this.setState({ disabled: clone.disabled });
  };
  passwordChangedHandler = e => {
    e.preventDefault();
    const clone = {
      ...this.state
    };

    clone.password = e.target.value;
    if (e.target.value != "") {
      clone.disabled = false;
    } else {
      clone.disabled = true;
    }
    this.setState({ password: clone.password });
    this.setState({ disabled: clone.disabled });
  };
  submitAuthHandler = (e, id) => {
    if (id === "0") {
      this.auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          /*const clone = {
            ...this.state
          };

          clone.username = this.auth.currentUser.displayName;

          this.setState({ username: clone.username });*/

          //this.close();
          this.setState({ nicknameOpen: true, authOpen: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ loginErrorMessage: <p>{error.message}</p> });
        });
    } else if (id === "1") {
      this.auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          /*

          this.auth.currentUser.updateProfile({
            

            displayName: this.state.username
          });
*/
          //this.close();
          this.setState({ nicknameOpen: true, authOpen: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ signupErrorMessage: <p>{error.message}</p> });
        });
    }
  };

  render() {
    const { authOpen, nicknameOpen, size } = this.state;
    const panes = [
      {
        menuItem: "Login",
        render: () => (
          <Tab.Pane>
            {" "}
            {this.state.loginErrorMessage}
            <input
              type="email"
              className="form-control inputElement"
              placeholder="Email"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.emailChangedHandler}
            />
            <input
              type="password"
              className="form-control inputElement"
              placeholder="Password"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.passwordChangedHandler}
            />
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={event => {
                this.submitAuthHandler(event, "0");
              }}
              disabled={this.state.disabled}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Signup",
        render: () => (
          <Tab.Pane>
            {" "}
            {this.state.signupErrorMessage}
            <input
              type="email"
              className="form-control inputElement"
              placeholder="Email"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.emailChangedHandler}
            />
            <input
              type="password"
              className="form-control inputElement"
              placeholder="Password"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.passwordChangedHandler}
            />
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={event => {
                this.submitAuthHandler(event, "1");
              }}
              disabled={this.state.disabled}
            />
          </Tab.Pane>
        )
      }
    ];

    return (
      <div>
        <Modal
          size="large"
          open={authOpen}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          dimmer="blurring"
        >
          <Modal.Content>
            <div>
              <Tab panes={panes} />
            </div>
          </Modal.Content>
        </Modal>
        <Modal
          size="large"
          open={nicknameOpen}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          dimmer="blurring"
        >
          <Modal.Content>
            <input
              type="text"
              className="form-control inputElement"
              placeholder="Nickname"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.nicknameChangedHandler}
            />
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={this.close}
              disabled={this.state.disabled}
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleSize;
