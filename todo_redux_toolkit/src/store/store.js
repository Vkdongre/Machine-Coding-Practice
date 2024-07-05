import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from '../features/ToDoSlice';
import ThemeReducer from '../features/ThemeSlice';
export const store = configureStore({
    reducer: {
        todos: ToDoReducer,
        theme: ThemeReducer,
    },
});
