import React from 'react';
import { Scrollchor } from 'react-scrollchor';

import { skills } from '../../data/skills';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Link from '@mui/material/Link';

import s from './index.module.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Greeting = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    window.setTimeout(() => setOpen(true), 5000);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Grid
      container
      id="home"
      className="App"
      alignItems="center"
      marginTop="6rem"
      height="100vh"
    >
      <Grid
        container
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
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className={s['x-sign']}>
            <Typed strings={skills} typeSpeed={70} backSpeed={50} loop />
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginTop="10rem"
      >
        <Stack spacing={2} direction="row">
          <Scrollchor to="contact">
            <Button variant="contained" size="large">
              CONTACT ME
            </Button>
          </Scrollchor>
          <Button
            variant="contained"
            size="medium"
            component={Link}
            onClick={handleClick}
            href={process.env.PUBLIC_URL + '/JonSegovia_CV.pdf'}
            download
          >
            DOWNLOAD CV
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Success!
            </Alert>
          </Snackbar>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Greeting;
