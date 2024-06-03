import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('0');
    } else if (value === 'X') {
      setInput(input.length > 1 ? input.slice(0, -1) : '0');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '+/-') {
      setInput((prevInput) => 
        prevInput.charAt(0) === '-' ? prevInput.slice(1) : `-${prevInput}`
      );
    } else {
      setInput((prevValue) => (prevValue === '0' ? value : prevValue + value));
    }
  };

  return (
    <div className='container'>
      <div>
        <h1 className='input'>{input}</h1>

        <div>
          <button onClick={() => handleClick('AC')}>AC</button>
          <button onClick={() => handleClick('X')}>X</button>
          <button onClick={() => handleClick('+/-')}>+/-</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>

        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>

        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>

        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>

        <div>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}
