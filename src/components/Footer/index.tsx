import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import s from './index.module.css';

const Footer = () => {
  return (
    <Grid
      container
      sx={{ marginTop: '35rem', marginLeft: 0 }}
      className='footer-background'
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography align='center' className='text-font' fontSize='small'>
          All Rights Reserved &copy; 2022
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align='center' className='text-font' fontSize='small'>
          {'<Jon Segovia/>'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
