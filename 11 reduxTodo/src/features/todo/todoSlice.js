import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: 'Sample Todo',
        isEditiable: false
    }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEditiable: false
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //console.log(action.payload)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            //console.log(action.payload)
            const {editingId, text } = action.payload
            state.todos = state.todos.map((todo) => (editingId === todo.id ? {id: editingId, text, isEditiable: false} : todo))
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer