import { skills } from '../data/skills';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';
import Button from '@mui/material/Button';
// import TabScrollButton from '@mui/material/TabScrollButton';
import Stack from '@mui/material/Stack';

const Greeting = () => {
  return (
    <Grid container className="App" alignItems="center" marginTop="5rem">
      <Grid
        container
        className="App"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={4}>
          <Typography variant="h2" align="center">
            Hi, I'm
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h1" align="center">
            J0n
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" align="center">
            The
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="App" alignItems="center" marginTop="5rem">
        <Grid item xs={12} md={4}>
          <Typography variant="h2" align="center">
            <Typed strings={skills} typeSpeed={70} backSpeed={50} loop />
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginTop="15rem"
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" href="#" size="large">
            CONTACT ME
          </Button>
          <Button variant="outlined" href="#" size="medium">
            DOWNLOAD CV
          </Button>
        </Stack>
      </Grid>

      {/* <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginTop="2rem"
      >
        <Grid item>
          <TabScrollButton direction="right" orientation="vertical" />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Greeting;
