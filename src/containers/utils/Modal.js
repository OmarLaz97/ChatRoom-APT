import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import "./Modal.css";
import firebase from "firebase";

class ModalExampleSize extends Component {
  state = {
    open: true,
    username: "",
    disabled: true
  };

  close = () => {
    this.props.ChatStore.addUser(this.state.username);
    this.setState({ open: false });
  };

  changeHandler = e => {
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
  submitHandler = e => {};

  render() {
    const { open, size } = this.state;

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
              <div class="ui attached tabular menu">
                <a class="active item">Login</a>
                <a class="item">Signup</a>
              </div>
              <div class="ui bottom attached segment active tab">
                {" "}
                <input
                  type="text"
                  className="form-control inputElement"
                  placeholder="Username"
                  aria-label="Example text with two button addons"
                  aria-describedby="button-addon3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  className="form-control inputElement"
                  placeholder="Password"
                  aria-label="Example text with two button addons"
                  aria-describedby="button-addon3"
                  onChange={this.changeHandler}
                />
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Submit"
                  onClick={this.close}
                  disabled={this.state.disabled}
                />
              </div>
              <div class="ui bottom attached segment tab">
                {" "}
                <input
                  type="text"
                  className="form-control inputElement"
                  placeholder="Username"
                  aria-label="Example text with two button addons"
                  aria-describedby="button-addon3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  className="form-control inputElement"
                  placeholder="Password"
                  aria-label="Example text with two button addons"
                  aria-describedby="button-addon3"
                  onChange={this.changeHandler}
                />
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Submit"
                  onClick={this.close}
                  disabled={this.state.disabled}
                />
              </div>
            </div>
          </Modal.Content>
          {/* <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={this.close}
              disabled={this.state.disabled}
            />
          </Modal.Actions> */}
        </Modal>
      </div>
    );
  }
}

export default ModalExampleSize;
