import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { switchDarkTheme } from './redux/reducer/theme';

import ScrollToTop from '@qwp/react-scroll-up';

import CustomButton from './components/CustomButton';
import SwitchLanguage from './components/SwitchLanguage';
import Tech from './components/Tech';

import LeftBarMobile from './components/LeftBar/LeftBarMobile';
import LeftBarFixed from './components/LeftBar/LeftBarFixed';
import Greeting from './components/Greeting';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { ThemeProvider } from '@mui/material/styles';
import { lightThemePalette, darkThemePalette } from './utils/mui-theme';
import { CssBaseline } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// import './css/App.css';

type RootState = {
  darkTheme: boolean | undefined;
  language: string;
};

function App() {
  const { darkTheme }: any = useSelector<RootState>((state) => state.darkTheme);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <div className={darkTheme ? '' : `${'app-background'}`}>
      <ThemeProvider theme={darkTheme ? darkThemePalette : lightThemePalette}>
        <CssBaseline />
        <SwitchLanguage />
        <CustomButton
          onClick={() => dispatch(switchDarkTheme())}
          startIcon={
            darkTheme ? (
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
          color='inherit'
        />
        <LeftBarMobile />
        <LeftBarFixed />
        <ScrollToTop
          showUnder={160}
          style={{ bottom: '15px', right: '15px', zIndex: '100' }}
        >
          <ArrowCircleUpOutlinedIcon
            color='secondary'
            sx={{ fontSize: '3rem' }}
          />
        </ScrollToTop>
        <Greeting />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
