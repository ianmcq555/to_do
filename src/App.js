import React, {useState, useEffect} from 'react'
import Todo from './Todo'

export default function App() {

  const [todo, setTodo] = useState([{
    message: 'Sleep',
    completed: true
  }])

  const renderTodo = () => {
    return todo.map((t, i)=><Todo key={i} t={t}/>)
  }
  const updateTodo = (e) => {
    e.preventDefault();
    const message = e.target.msg.value
    const todoItem = {
      message: message,
      completed: false
    }
    setTodo([...todo, todoItem])
  }
  return (
    <div>
      <h1>ToDo List</h1>
      {renderTodo()}
      <form onSubmit={(e)=>{updateTodo(e)}}>
      <input type='text' name='msg'/>
      <button>Add</button>
      </form>
    </div>
  )
}