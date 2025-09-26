import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {input: 'Hello! This is a sample todo', completed: false}
  ])

  const [selectedTab, setSelectedTab] = useState('Active')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, completed: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDoneTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['completed'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-data', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(
    () => {
      if(!localStorage || !localStorage.getItem('todo-data')) { return }
      let db = JSON.parse(localStorage.getItem('todo-data'))
      console.log(db.todos)
      setTodos(db.todos)
    },
    []
  )

  return (
   <>
    <Header todos={todos}/>
    <Tabs 
    selectedTab={selectedTab} 
    setSelectedTab={setSelectedTab} 
    todos={todos}/>
    <TodoList 
    selectedTab={selectedTab} 
    onDeleteClick={handleDeleteTodo}
    onDoneClick={handleDoneTodo}
    todos={todos}/>
    <TodoInput onAddClick={handleAddTodo}/>
   </>
  )
}

export default App
