import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./MyPosts/Post";
import { Button } from "@mui/material";

const MyPosts = (props) => {
  const newPostRef = React.createRef();

  const validatePostContent = (props) => {
    const text = newPostRef.current.value;
    const regex = /^@?(\w){1,15}$/;

    if (regex.test(text)) {
      newPostRef.current.style.border = "1px solid black";
      props.addPost(text);
      return true;
    } else {
      newPostRef.current.style.border = "1px solid red";
      return false;
    }
  };

  const posts = props.postData.map((post) => (
    <Post
      key={post.id}
      message={post.message}
      name={post.name}
      logo={post.logo}
      likeCount={post.likeCount}
      dislikeCount={post.dislikeCount}
    />
  ));

  const onPostChange = (newPostRef) => {
    const text = newPostRef.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.content_text}>
      <div className={classes.main_cap}>
        <div>My Posts</div>
        <div>
          <textarea
            ref={newPostRef}
            id="post_block"
            className={classes.post_block}
            value={props.newPostText}
            onChange={() => onPostChange(newPostRef)}
          />
          <Button
            variant="contained"
            onClick={() => validatePostContent(props)}
          >
            Add post
          </Button>
        </div>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
