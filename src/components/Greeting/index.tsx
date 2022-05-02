import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollchor } from 'react-scrollchor';

import { english_skills, spanish_skills } from '../../data/skills';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Link from '@mui/material/Link';

import s from './index.module.css';

type RootState = {
  language: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Greeting = () => {
  const [open, setOpen] = React.useState(false);

  const { language }: any = useSelector<RootState>((state) => state.language);

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
          <Typography variant="h3" align="center">
            {language === 'ENG' ? 'Hi' : 'HOLA'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h1" align="center">
            {language === 'ENG' ? `I'm J0n` : 'Soy J0n'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" align="center">
            {language === 'ENG' ? 'The' : 'El'}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="App" alignItems="center" marginTop="5rem">
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className={s['x-sign']}>
            <Typed
              strings={language === 'ENG' ? english_skills : spanish_skills}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        margin="1rem"
        marginTop="10rem"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Scrollchor to="contact">
            <Button
              variant="contained"
              size="large"
              className={s['button-size']}
            >
              {language === 'ENG' ? `CONTACT ME` : 'CONTACTAME'}
            </Button>
          </Scrollchor>
        </Grid>

        <Grid item className={s['button-padding']}>
          <Button
            type="button"
            variant="contained"
            size="large"
            component={Link}
            onClick={handleClick}
            href={process.env.PUBLIC_URL + '/JonSegovia_CV.pdf'}
            download
          >
            {language === 'ENG' ? `DOWNLOAD CV` : 'DESCARGAR CV'}
          </Button>
        </Grid>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {language === 'ENG' ? `Success!` : 'Descargado!'}
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default Greeting;
