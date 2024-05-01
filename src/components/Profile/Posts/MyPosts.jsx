import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPosts/Post";
import { Button } from "@mui/material";

const MyPosts = (props) => {
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


  const posts = props.postData.map(post => (
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