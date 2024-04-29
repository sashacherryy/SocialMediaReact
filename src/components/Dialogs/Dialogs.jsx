import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={classes.item}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  )
}

const Message = (props) => {
  return <div className={classes.ms}>{props.messasge}</div>
}

const Dialogs = () => {
  return (
    <div className={classes.messangerBlock}>
      <div className={classes.dialog}>
        <div className={classes.dialogs_item}>
          <DialogItem name="Sasha" id="1"/>
          <DialogItem name="Andrey" id="2"/>
          <DialogItem name="Kostya" id="3"/>
          <DialogItem name="Varfs" id="4"/>
          <DialogItem name="Vlad" id="5"/>
          <DialogItem name="Getic" id="6"/>
        </div>
      </div>
      <div className={classes.messages}>
        <Message messasge="Hi hwo are u?"/>
      </div>
    </div>
  );
};

export default Dialogs;
