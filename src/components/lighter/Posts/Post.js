import React from 'react';
import './Posts.css';

function Post({username, date, message}) {
  return (
    <div className='post'>
        <label className='username'>{username}</label>
        &nbsp;&nbsp;
        <label className='date'>{date}</label>
        <p className='message'>{message}</p>
    </div>
  )
}

export default Post;