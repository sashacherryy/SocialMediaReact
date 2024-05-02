import React from "react";
import classes from "../Dialogs.module.css";
import { Button } from "@mui/material";

const Message = (props) => {
  const newMessageRef = React.createRef();
  
  const validateMessageContent = () => {
    const text = newMessageRef.current.value;
    const regex = /^@?(\w){1,15}$/;

    if (regex.test(text)) {
      newMessageRef.current.style.border = "1px solid black";
      return true;
    } else {
      newMessageRef.current.style.border = "1px solid red";
      return false;
    }
  };

  return (
    <>
      <div className={classes.ms}>
        <div className="messages">{props.message}</div>
      </div>
    </>
  );
};

export default Message;
