import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDosList = ({ todos, setTodos, setEditTodo }) => {

    const removeTodo = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setEditTodo(todo)
    }
    return <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <ul> {
            todos.length === 0 ? <li className="list-item" > <label
                className="list"
                onChange={(event) => event.preventDefault()}
            >Empty</label> </li> : todos.map((todo) => (

                <li className="list-item" >
                    <input
                        type="text"
                        value={todo.id}
                        className="list-v"
                        onChange={(event) => event.preventDefault()}
                    />
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                    <div >
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo)}
                            className='delete-icon'
                            size="30"
                            color='white' />
                        <TiEdit
                            onClick={() => handleComplete(todo)}
                            className='edit-icon'
                            size="30"
                            color='white'
                        />
                    </div>
                </li>

            ))
        }  </ul>
    </div>
}
export default ToDosList