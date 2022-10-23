import React from 'react';
import './Posts.css';

function Post({username, date, message}) {
  return (
    <div className='border-bottom'>
      <div>
      <label className='username'>{"Posted by: "+ username } <p className='message'>{message}</p></label>  
      </div>
      <label className='date'>{date}</label>
    </div>
  )
}

export default Post;