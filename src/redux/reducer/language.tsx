import { createSlice } from '@reduxjs/toolkit';

export const language = createSlice({
  name: 'language',
  initialState: {
    language: 'ENG',
  },
  reducers: {
    switchLanguage: (state, action) => {
      if (action.payload === 'ENG') state.language = 'ENG';
      if (action.payload === 'SPA') state.language = 'SPA';
    },
  },
});

export const { switchLanguage } = language.actions;

export default language.reducer;
