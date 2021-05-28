import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  return (
  <div className="container">
    <div className="app-wrapper">
      <div><Header/></div>
      <div><Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodo= {editTodo}
      setEditTodo = {setEditTodo}/>
        </div>
        <div>
          <ToDoList todos={todos} setTodos={setTodos}
          setEditTodo = {setEditTodo}
          />
        </div>
    </div>

  </div>
  )
}

export default App;
