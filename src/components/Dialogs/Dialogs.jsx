import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messageElements = props.state.message.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={classes.messangerBlock}>
      <div className={classes.dialog}>
        <div className={classes.dialogs_item}>
          {props.state.dialogsData.map((d) => (
            <DialogItem key={d.id} name={d.name} id={d.id} />
          ))}
        </div>
      </div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
