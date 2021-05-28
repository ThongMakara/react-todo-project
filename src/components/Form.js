import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
var autoId = 1;
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const inputRef = useRef();

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
            inputRef.current.focus();
        } else {
            setInput("")
        }
    }, [setInput, editTodo])


    const updateTodo = (title, id) => {

        const newTodo = todos.map((todo) => todo.id === id ? { title, id } : todo)
        setTodos(newTodo)
        setEditTodo("")
    }
    const onFormSumit = (event) => {
        event.preventDefault()
        var checkDuplicate = todos.find(obj => obj.title === input)
        if (!editTodo) {
            if (checkDuplicate != null) return toast.warning("You are add duplicate value!")
            setTodos([...todos, { id: autoId++, title: input }])
            setInput("")
        } else {
            if (checkDuplicate != null) return toast.warning("You can't update duplicate value!")

            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
        <form onSubmit={onFormSumit}>
            <input
                className="list"
                type="text"
                ref={inputRef}
                placeholder="Please Input ToDo..."
                className="task-input"
                value={input}
                required
                autoFocus
                onChange={onInputChange} />
        </form>
    )
}
export default Form