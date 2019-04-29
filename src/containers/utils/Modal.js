import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import "./Modal.css";

class ModalExampleSize extends Component {
  state = {
    open: true,
    username: "",
    disabled: true
  };

  close = () => {
    this.props.ChatStore.addUser(this.state.username);
    this.setState({ open: false })
    };

  changeHandler = e => {
    e.preventDefault();
    const clone = {
      ...this.state
    };

    clone.username = e.target.value;
    if (e.target.value != "") {
      clone.disabled = false;
    }else{
        clone.disabled = true;
    }
    this.setState({ username: clone.username });
    this.setState({ disabled: clone.disabled });
  };

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Modal
          size="mini"
          open={open}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          dimmer="blurring"
        >
          <Modal.Header>Insert a Username</Modal.Header>
          <Modal.Content>
            <input
              type="text"
              className="form-control username"
              placeholder="Username"
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
              onChange={this.changeHandler}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={this.close}
              disabled={this.state.disabled}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleSize;
