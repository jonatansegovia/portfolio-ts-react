import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import s from './index.module.css';

const Footer = () => {
  return (
    <Container sx={{ marginTop: '9rem' }} className={s['footer-background']}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            align="center"
            className={s['text-font']}
            fontSize="small"
          >
            All Rights Reserved &copy; 2022
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            className={s['text-font']}
            fontSize="small"
          >
            {'<Jon Segovia/>'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
