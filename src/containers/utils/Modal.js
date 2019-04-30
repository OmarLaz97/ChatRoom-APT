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
    open: true,
    username: "",
    email: "",
    password: "",
    loginErrorMessage: "",
    signupErrorMessage: "",
    disabled: true
  };

  close = () => {
    this.props.ChatStore.addUser(this.state.username);
    this.setState({ open: false });
  };

  usernameChangedHandler = e => {
    e.preventDefault();
    const clone = {
      ...this.state
    };

    clone.username = e.target.value;
    if (e.target.value != "") {
      clone.disabled = false;
    } else {
      clone.disabled = true;
    }
    this.setState({ username: clone.username });
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
  submitHandler = (e, id) => {
    if (id === "0") {
      this.auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          const clone = {
            ...this.state
          };

          clone.username = this.auth.currentUser.displayName;

          this.setState({ username: clone.username });

          this.close();
        })
        .catch(error => {
          console.log(error);
          this.setState({ loginErrorMessage: <p>{error.message}</p> });
        });
    } else if (id === "1") {
      this.auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          // Updates the user attributes:

          this.auth.currentUser.updateProfile({
            // <-- Update Method here

            displayName: this.state.username
          });

          this.close();
        })
        .catch(error => {
          console.log(error);
          this.setState({ signupErrorMessage: <p>{error.message}</p> });
        });
    }
  };

  render() {
    const { open, size } = this.state;
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
                this.submitHandler(event, "0");
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
              type="text"
              className="form-control inputElement"
              placeholder="Username"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.usernameChangedHandler}
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
                this.submitHandler(event, "1");
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
          open={open}
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
      </div>
    );
  }
}

export default ModalExampleSize;
