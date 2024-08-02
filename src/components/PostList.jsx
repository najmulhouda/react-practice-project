import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./postList.module.css";
const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="najmul" body="this is najmul " />
        <Post author="houda" body="this is houda" />
      </ul>
    </>
  );
};

export default PostList;
