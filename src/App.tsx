import LeftBar from './components/LeftBar';
import Greeting from './components/Greeting';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div>
      <LeftBar />
      <Greeting />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
