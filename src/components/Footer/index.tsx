import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Card sx={{ marginTop: '6rem' }} variant="outlined">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography align="center">
              All Rights Reserved &copy; 2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">{'< Jon Segovia />'}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default Footer;
