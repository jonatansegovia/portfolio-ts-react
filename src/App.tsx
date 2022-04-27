import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchToDark } from './redux/actions';

import ScrollToTop from '@qwp/react-scroll-up';

import LeftBarMobile from './components/LeftBar/LeftBarMobile';
import LeftBarFixed from './components/LeftBar/LeftBarFixed';
import Greeting from './components/Greeting';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './utils/mui-theme';
import { CssBaseline } from '@mui/material';

import './App.css';

interface RootState {
  darkTheme: boolean;
}

function App() {
  const darkGlobal = useSelector<RootState>((state) => state.darkTheme);

  console.log(darkGlobal);

  return (
    <ThemeProvider theme={true ? darkTheme : lightTheme}>
      <CssBaseline />
      <LeftBarMobile />
      <LeftBarFixed />
      <ScrollToTop showUnder={160} style={{ bottom: '15px', right: '15px' }}>
        <ArrowCircleUpOutlinedIcon
          color="secondary"
          sx={{ fontSize: '3rem' }}
        />
      </ScrollToTop>
      <Greeting />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
