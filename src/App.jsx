import { useState, useEffect } from "react"
import TodoInput from "./components/todoInput"
import TodoList from "./components/todoList"

function App() {

  // useState 

  // first value is state-value 
  // second is useState() provided function; when called reload automatically 
  // name not fixed, but setVARIABLE is common
  const [todos, setTodos] = useState([])

  // set here, so todoList and todoinput have access to it
  // todoList to edit 
  const [todoValue, setTodoValue] = useState('')

  // const numbers = [1, 2] --> const [numbers, setNumbers] = useState([1,2])

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)  
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)

    setTodos(newTodoList)
  }


  function handleEditTodo(index){    
    const valueToBeEdited = todos[index]

    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }



  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <main>
        <TodoInput 
          todoValue={todoValue} 
          setTodoValue={setTodoValue} 
          handleAddTodos={handleAddTodos} 
          />  
        <TodoList 
          todos={todos} 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo} />              
      </main>
    </>
  )
}

export default App
