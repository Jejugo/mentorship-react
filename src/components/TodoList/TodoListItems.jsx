import React from 'react'

export default function TodoListItems({ items }) {
  return (
    <ul>
      {
        items.map((item) => (
          <li>{item}</li>
        ))
      }
    </ul>
  )
}
