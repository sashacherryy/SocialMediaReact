import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  const trash =
    "https://www.shareicon.net/data/2016/01/19/255486_empty_512x512.png";
  const like =
    "https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png";
  const dislike =
    "https://i.pinimg.com/originals/72/1b/52/721b52c61f5781c740432f64b77f9ca6.png";

  return (
    <div className={classes.item}>
      <div className={classes.cap}>
        <div className={classes.cap}>
          <img className={classes.cap_logo} src={props.logo} />
          <a className={classes.cap_name}>{props.name}</a>
        </div>
        <img className={classes.trash} src={trash} />
      </div>
      <div className={classes.post}>
        <div>{props.message}</div>
      </div>
      <div className={classes.reaction}>
        <div className={classes.like}>
          <img src={like} />
          <span>{props.likeCount}</span>
        </div>
        <div className={classes.dislike}>
          <img src={dislike} />
          <span>{props.dislikeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
