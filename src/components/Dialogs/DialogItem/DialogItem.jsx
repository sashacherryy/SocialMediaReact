import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItem = (props) => {

  let path = `/dialogs/${props.id}`
  return (
    <div className={classes.item} >
      <div className={classes.dialogItems}>
        <img className={classes.logoDialog} src={props.logo} />
        <NavLink className={classes.dialogName} to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}


export default DialogItem
