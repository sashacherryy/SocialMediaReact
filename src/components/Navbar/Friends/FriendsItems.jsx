import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";

const FriendsItems = (props) => {

  let path = `/profile/${props.id}`

  return (
    <div className={classes.item} >
      <div className={classes.friendsItems}>
        <img className={classes.friendsLogo} src={props.logo} />
        <NavLink className={classes.friendsName} to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}


export default FriendsItems
