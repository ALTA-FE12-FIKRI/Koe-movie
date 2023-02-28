import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkModeState {
  enabled: boolean;
}

const initialState: DarkModeState = {
  enabled: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
