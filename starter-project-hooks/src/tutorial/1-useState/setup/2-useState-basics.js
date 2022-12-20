import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState('hello world)[0]
  // const handler = useState('hello world)[1]
  // console.log(value, handler)
  
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if(text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
