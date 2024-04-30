import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPosts/Post";
import { Button } from "@mui/material";

const MyPosts = () => {
  
  const logoUrl = "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png";
  const logoUrldima = "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png";

  let postData = [
    { id: 1, logo: logoUrl,  name: "Olexandr V", message: "i'm fine, what bout u?", likeCount: 1, dislikeCount: 0 },
    { id: 2, logo: logoUrldima, name: "Dima K", message: "Hi all, how are u?", likeCount: 1, dislikeCount: 2 },
    { id: 3, logo: logoUrl, name: "Verastouy K", message: "No worries about my health", likeCount: 3, dislikeCount: 1 },
  ];

  function validatePostContent() {
    const textArea = document.getElementById('post_block');
    const text = textArea.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,10}$/;

    if (regex.test(text)) {
      textArea.style.border = "1px solid black";
      return true;
    } else {
      textArea.style.border = "1px solid red";
      return false;
    }
  }


  const posts = postData.map(post => (
    <Post
      key={post.id}
      message={post.message}
      name={post.name}
      logo= {post.logo}
      likeCount={post.likeCount}
      dislikeCount={post.dislikeCount}
    />
  ));

  return (
    <div className={classes.content_text}>
      <div className={classes.main_cap}>
        <div>My Posts</div>
        <div>
          <textarea id="post_block" className={classes.post_block}></textarea>
          <Button variant="contained">Add post</Button>
        </div>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;