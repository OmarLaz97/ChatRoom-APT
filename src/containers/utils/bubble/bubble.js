import React from "react";
import "./bubble.css";

const bubble = props => (
  <div className={props.class}>
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="p-2 bd-highlight" id = {props.userClass}>{props.msg.user}</div>
      <div className="p-2 bd-highlight" id= {props.msgClass}>{props.msg.msg}</div>
    </div>
  </div>
);

export default bubble;
