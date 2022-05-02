import { createTheme } from '@mui/material';

export const lightThemePalette = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E91E63',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#ff96ba',
      contrastText: '#FFFFFF',
    },
  },
});

export const darkThemePalette = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FBBBD9',
    },
    secondary: {
      main: '#FF0060',
    },
  },
});
