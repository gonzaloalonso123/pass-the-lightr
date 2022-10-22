import React from 'react';
import './Log.css';



function Log( date, username) {
  return (
    <div className='xdprueba'>
        {/*<label howwasfound='codelighter'>dasdhkahf</label>*/}
        <label className='date'>{date}</label>
         {/*<label className='location'>dlkwj</label>*/}
        <label className='username'>{username}</label>
    </div>
  )
}

export default Log;