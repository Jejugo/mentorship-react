import React, { useState } from 'react'

/**
 * setItems = ['12312321', 'blablabla', 'blablabla2']
 * setItems = 'aaasdasdsadsadsadasdasdsad'
 */
export default function Searchbox({ setItems }) {

  const [inputText, setInputText] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        placeholder="Insira o item" 
        onChange={(e) => setInputText(e.target.value)} 
        value={inputText}
      />
      <button 
        onClick={(e) => {
          if(inputText){
            setItems((prevState) => [...prevState, inputText])

            // limpa o campo
            setInputText('')
          }
        }}>
        Inserir na lista
      </button>
    </form>
  )
}
