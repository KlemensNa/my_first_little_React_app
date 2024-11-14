import React from 'react'
import TodoCard from './todoCard'

export default function TodoList(props) {

  const {todos} = props

  return (
    <div className='main'>
      {todos.map((todo, todoIndex)=> {
        return (
          // transport the whole props from parentComponent to the next component
          // set own props like index to handle with
          <TodoCard 
            {...props} 
            key={todoIndex} 
            index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </div>
  )
}

