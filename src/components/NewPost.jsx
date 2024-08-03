import React from "react";
import classes from "./NewPost.module.css";
const NewPost = () => {
  return (
    <div>
      <form className={classes.form}>
        <p className={classes.formLabel}>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <textarea name="text" id="name" required />
        </p>
      </form>
    </div>
  );
};

export default NewPost;
