import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollchor } from 'react-scrollchor';

import { english_skills, spanish_skills } from '../../data/skills';
import { handleLanguage } from '../../utils/handleLanguage';

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

  const greeting1 = (
    <Typography variant="h3" align="center">
      {handleLanguage(language, 'Hi', 'Hola')}
    </Typography>
  );

  const greeting2 = (
    <Typography variant="h1" align="center">
      {handleLanguage(language, `I'm J0n`, 'Soy J0n')}
    </Typography>
  );

  const greeting3 = (
    <Typography variant="h3" align="center">
      {handleLanguage(language, 'The', 'El')}
    </Typography>
  );

  const skills = (
    <Typography variant="h3" align="center" className={s['x-sign']}>
      <Typed
        strings={language === 'ENG' ? english_skills : spanish_skills}
        typeSpeed={70}
        backSpeed={50}
        loop
      />
    </Typography>
  );

  const contactme_btn = (
    <Scrollchor to="contact">
      <Button variant="contained" size="large" className={s['button-size']}>
        {handleLanguage(language, 'CONTACT ME', 'CONTACTAME')}
      </Button>
    </Scrollchor>
  );

  const download_btn = (
    <Button
      type="button"
      variant="contained"
      size="large"
      component={Link}
      onClick={handleClick}
      href={process.env.PUBLIC_URL + '/JonSegovia_CV (May 2022).pdf'}
      download
    >
      {handleLanguage(language, 'DOWNLOAD CV', 'DESCARGAR CV')}
    </Button>
  );

  console.log(process.env.PUBLIC_URL);

  const sucess_message = (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {handleLanguage(language, 'Success!', 'Descargado!')}
      </Alert>
    </Snackbar>
  );

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
          {greeting1}
        </Grid>
        <Grid item xs={12} md={4}>
          {greeting2}
        </Grid>
        <Grid item xs={12} md={4}>
          {greeting3}
        </Grid>
      </Grid>
      <Grid container className="App" alignItems="center" marginTop="5rem">
        <Grid item xs={12}>
          {skills}
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
        <Grid item>{contactme_btn}</Grid>
        <Grid item className={s['button-padding']}>
          {download_btn}
        </Grid>
        {sucess_message}
      </Grid>
    </Grid>
  );
};

export default Greeting;
