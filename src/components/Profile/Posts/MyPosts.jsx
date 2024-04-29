import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPosts/Post";
import { Button } from "@mui/material";

const MyPosts = () => {
  const logoUrl =
  "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png";
  const logoUrldima= "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png";
  return (
    <div className={classes.content_text}>
      <div className={classes.main_cap}>
        <div>My Posts</div>
        <div>
          <textarea></textarea>
          <Button variant="contained">Add post</Button>
        </div>
      </div>
      <div className={classes.posts}>
        <a></a>
        <Post message="i'm fine, what bout u?" name="Olexandr V" logo={logoUrl} likeCount="2"/>
        <Post message="Hi all, how are u?" name="Dima K" logo={logoUrldima} dislikeCount="2"/>
      </div>
    </div>
  );
};

export default MyPosts;
