import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
    poster_path: string;
    id: number;
    title: string;
}

export interface FavState {
    items: Item[];
}

const initialState: FavState = {
    items: [],
};

export const favSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const {addFavorite, removeFavorite} = favSlice.actions;

export default favSlice.reducer;
