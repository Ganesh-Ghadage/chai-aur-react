import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }

    useEffect(() => {
        if(todos.isEditiable) setTodo(todos.text)
    }, [todos])

    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
