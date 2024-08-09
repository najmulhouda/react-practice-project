import React from "react";
import classes from "./NewPost.module.css";
const NewPost = () => {
  const changeBodyHander   
  return (
    <div>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label> <br />
          <textarea id="body" required rows={3} onChange={}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label> <br />
          <textarea name="text" id="name" required  />
        </p>
      </form>
  );
};

export default NewPost;

// How I Made My Website Load in 0.364 Seconds