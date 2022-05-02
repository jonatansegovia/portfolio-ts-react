import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducer/theme';
import language from '../reducer/language';

export default configureStore({
  reducer: {
    darkTheme: themeReducer,
    language: language,
  },
});
