import { configureStore } from '@reduxjs/toolkit';
import { favSlice } from '../reducers/favSlice';
import modeSlice, { darkModeSlice } from '../reducers/modeSlice';

const store = configureStore({
    reducer: {
        favorite: favSlice.reducer,
        darkMode: darkModeSlice.reducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;