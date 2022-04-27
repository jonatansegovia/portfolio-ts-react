import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { switchToDark } from './redux/actions';

import ScrollToTop from '@qwp/react-scroll-up';

import CustomButton from './components/CustomButton';

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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import './App.css';

type RootState = {
  darkTheme: boolean;
};

function App() {
  const darkGlobal = useSelector<RootState>((state) => state.darkTheme);
  const dispatch: Dispatch<any> = useDispatch();

  console.log(darkGlobal);

  {
    /* <Button>BUTTON</Button> */
  }

  return (
    <ThemeProvider theme={darkGlobal ? darkTheme : lightTheme}>
      <CssBaseline />
      <CustomButton
        onClick={() => dispatch(switchToDark())}
        startIcon={
          darkGlobal ? (
            <Brightness4Icon
              sx={{
                fontSize: '2.5rem !important',
                position: 'fixed !important',
                top: '0px !important',
                right: '0px !important',
                marginRight: '10px !important',
                marginTop: '8px !important',
                zIndex: 100,
              }}
            />
          ) : (
            <Brightness7Icon
              sx={{
                fontSize: '2.5rem !important',
                position: 'fixed !important',
                top: '0px !important',
                right: '0px !important ',
                marginRight: '10px !important',
                marginTop: '8px !important',
                zIndex: 100,
              }}
            />
          )
        }
        color="inherit"
        sx={{}}
      />
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
