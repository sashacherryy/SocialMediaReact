import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.content_profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
