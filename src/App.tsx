import ScrollToTop from '@qwp/react-scroll-up';

import LeftBarMobile from './components/LeftBar/LeftBarMobile';
import Greeting from './components/Greeting';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

import './App.css';

function App() {
  return (
    <div>
      <ScrollToTop showUnder={160} style={{ bottom: '15px', right: '15px' }}>
        <ArrowCircleUpOutlinedIcon
          color="secondary"
          sx={{ fontSize: '3rem' }}
        />
      </ScrollToTop>
      <LeftBarMobile />
      <Greeting />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
