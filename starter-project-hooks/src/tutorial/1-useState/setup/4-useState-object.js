import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'peter',
  //   age: 24,
  //   message: 'random message'
  // })
  // const handleClick = () => {
  //   setPerson({...person, message: 'Hello! I am Peter.'})
  // }
  // return (
  //   <>
  //     <h2>{person.name}</h2>
  //     <h2>{person.age}</h2>
  //     <h2>{person.message}</h2>
  //     <button type='button' className='btn' onClick={handleClick}>
  //       change message
  //     </button>
  //   </>
  // )


  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    setMessage('Hello! I am Peter.')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>change message</button>
    </>
  )
};

export default UseStateObject;
