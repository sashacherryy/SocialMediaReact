import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsItems from './Friends/FriendsItems.jsx'

const Navbar = (props) => {

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/" >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" >
          Message
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" >
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
          <div className="friends">Friends</div>
          {props.state.friends.map((f) => (
            <FriendsItems key={f.id} name={f.name} id={f.id} logo={f.logo}/>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
