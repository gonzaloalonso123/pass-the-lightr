import React from 'react';
import './ForumLogPicker.css';

function ForumLogPicker({setLogOrForum}) {
  return (
    <div className='forum-log-picker-container'>
        <button className='forum-log-picker-button' onClick={() => setLogOrForum("forum")}>Forum</button>
        <button className='forum-log-picker-button' onClick={() => setLogOrForum("log")}>Log</button>
    </div>
  )
}

export default ForumLogPicker;