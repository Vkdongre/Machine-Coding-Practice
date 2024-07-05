import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

export const ThemeSlice = createSlice({
    name: 'themeslice',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
