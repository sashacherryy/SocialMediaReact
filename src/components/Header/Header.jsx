import React from "react"
import classes from "./Header.module.css";
import Profile from "../Profile/Profile";

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" />
                <a className={classes.titleSite}>Site with React</a>
            </header>
        </div>
    );
}

export default Header;

