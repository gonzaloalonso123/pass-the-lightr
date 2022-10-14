import React from "react";
import Post from "./Post";
import "./Posts.css";

function Posts({posts}) {
  return (
    <div className="posts-container">
      <div className="posts">
        {posts.reverse().map((post,key) => <Post username = {post.nickname} date = {post.date} message = {post.message} key ={key}/> )}
      </div>
    </div>
  );
}

export default Posts;
