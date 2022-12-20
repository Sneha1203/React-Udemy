import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const increaseValue = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 2000)
    
  }

  const resetValue = () => {
    setValue(0)
  }

  const decreaseValue = () => {
    setValue((prevValue) => {
      return prevValue - 1
    })
  }

  return (
    <>
      <h2>Regular counter</h2>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={increaseValue}>Increase</button>
      <button type='button' className='btn' onClick={resetValue}>Reset</button>
      <button type='button' className='btn' onClick={decreaseValue}>Decrease</button>
    </>
  )
};

export default UseStateCounter;
