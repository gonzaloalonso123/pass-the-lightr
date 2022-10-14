import React from 'react';
import './SomeStats.css';

function SomeStats() {
  return (
    <div className='some-stats-container'>
        <div className='someStat'>TOTAL KM<h1>11231km</h1></div>
        <div className='someStat'>TOTAL PASSED/FOUND<h1>1182</h1></div>
        <div className='someStat'>TOTAL LIGHTERS<h1>100</h1></div>
    </div>
  )
}

export default SomeStats;