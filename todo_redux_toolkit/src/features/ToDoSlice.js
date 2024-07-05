import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: nanoid(),
            name: 'Learn Redux',
            description: 'create simple todo app using redux tooklit',
            completed: false,
        },
    ],
};

export const ToDoSlice = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name,
                description: action.payload.description,
                completed: false,
            };
            state.todos.push(todo);
        },

        updateTodo: (state, action) => {
            console.log(action);
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },

        removeToDo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});

export const { addTodo, removeToDo, updateTodo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
