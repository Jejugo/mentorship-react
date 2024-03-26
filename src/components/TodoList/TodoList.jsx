import React, { useState } from 'react'
import Searchbox from './Searchbox'
import TodoListItems from './TodoListItems'

export default function TodoList() {

  const [items, setItems] = useState([])

  return (
    <>
      <Searchbox setItems={setItems}/>
      <TodoListItems items={items}/>
    </>
  )
}
