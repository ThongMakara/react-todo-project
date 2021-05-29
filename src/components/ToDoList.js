import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDosList = ({ todos, setTodos, setEditTodo }) => {

    const removeTodo = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
        setEditTodo("")
    }


    const handleEditTodo = (todo) => setEditTodo(todo)

    return <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <ul> {
            todos.length === 0 ? <li className="list-empty-data" > <label
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
                    <div>

                        <RiCloseCircleLine
                            style={{ marginRight: '20' }}
                            onClick={() => removeTodo(todo)}
                            className='delete-icon'
                            size="30"
                            color='white' />
                        <TiEdit
                            onClick={() => handleEditTodo(todo)}
                            className='edit-icon'
                            size="30"
                            style={{ marginLeft: '10' }}
                            color='white'
                        />
                    </div>
                </li>

            ))
        }  </ul>
    </div>
}
export default ToDosList