import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';

import './App.css';

function App() {
  return (
    <Grid container className="App">
      <Grid item>
        <Typography variant="h1" align="center">
          Hi! I'm J0n
        </Typography>
        <Typography variant="h1" align="center">
          The
        </Typography>
        <Typography variant="h2" align="center">
          <Typed
            strings={[
              'Developer',
              'Father',
              'Self-Taught',
              'Messi Fan',
              'React Lover',
              'Empathetic',
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
