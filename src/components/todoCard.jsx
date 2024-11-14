import React from 'react'

export default function TodoCard(props) {

  // get props from component where it called
  // children contains value
  // props contains all 
  // handleDeleteTodo is the function from Apps.jsx
  // index ist given as the index

  const {children, handleDeleteTodo, index, handleEditTodo} =  props // vereinfachung für props.children --> würde auch funktionieren

  console.log(handleEditTodo)

  return (
    <li className='todoItem'>
      <div className='actionsContainer'>
          {children}  
        <button onClick={() => {
          handleEditTodo(index)
        }}><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}><i className="fa-solid fa-trash"></i></button>
      </div>
    </li>
  )
}
