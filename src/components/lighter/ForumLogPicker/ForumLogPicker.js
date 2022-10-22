import React from 'react';
import './ForumLogPicker.css';

function ForumLogPicker({setLogOrForum}) {
  return (
    <div className='lighterPageSection horizontal'>
        <button className='standar-button' onClick={() => setLogOrForum("forum")}>Forum</button>
        <button className='standar-button' onClick={() => setLogOrForum("log")}>Log</button>
    </div>
  )
}

export default ForumLogPicker;