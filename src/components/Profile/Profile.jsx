import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.content_profile}>
      <ProfileInfo />
      <MyPosts postData={props.state.postData}/>
    </div>
  );
};

export default Profile;
