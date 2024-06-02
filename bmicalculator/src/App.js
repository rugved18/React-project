import React, { useState } from 'react'
import './App.css'

function App() {

  const[height,setHeight] =useState(70);
  const[weight,setWeight] =useState(180);
  const[bmi,setBmi] =useState('');

  function changeweight(event){
    setWeight(event.target.value);
  }

  function changeHeight(event){
    setHeight(event.target.value);
  }
    
  const output =()=>{
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);
  }


  return (
    <div>
      <div className='outer-container'>
      <h1>BMI Calculator</h1>

  <div>
  <p className='input-section'  >weight is {weight} kg</p>
  <input className='input-section' type='range' step={1} min={40} max={200} onChange={changeweight}></input>
  
  <p className='input-section' >height is {height} cm</p>
  <input className='input-section' type='range' step={1} min={40} max={200}  onChange={changeHeight}></input>

  <p className='output-selction'> the BMI is {bmi} </p>
  <button onClick={output}>click</button>
</div>
      </div>
      
    </div>
  )
}

export default App