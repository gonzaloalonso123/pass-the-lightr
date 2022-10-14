import React from 'react';
import LocationPicker from './LocationPicker';

function Where({whereAnswer, setWhereAnswer}) {
  return (
    <div className="questions-container">
    <h1>And do you remember where exactly?</h1>
    <LocationPicker setWhereAnswer = {setWhereAnswer}/>
    {/* <LocationPicker2 setWhereAnswer = {setWhereAnswer}/> */}
  </div>
  )
}

export default Where;