import { createSlice } from '@reduxjs/toolkit';

export const theme = createSlice({
  name: 'dark-theme',
  initialState: {
    darkTheme: true,
  },
  reducers: {
    switchDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { switchDarkTheme } = theme.actions;

export default theme.reducer;
