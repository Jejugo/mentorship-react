import React from 'react'

function Button({ setIsContentHidden }) {
  return (
    <button onClick={() => setIsContentHidden((prevState) => !prevState)}>Hide/Show</button>
  )
}

export default Button