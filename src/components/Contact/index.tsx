import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import s from './index.module.css';

const Contact = () => {
  return (
    <Container>
      <Grid container id="contact" marginTop="5rem" sx={{ height: '80vh' }}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Contact Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <TextField label="Name" fullWidth className={s.field}></TextField>
            <TextField
              label="Email"
              fullWidth
              required
              className={s.field}
            ></TextField>
            <TextField
              label="Subject"
              fullWidth
              className={s.field}
            ></TextField>
            <TextField
              label="Type Something Here..."
              fullWidth
              multiline
              rows={4}
              className={s.field}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              endIcon={<KeyboardArrowRight />}
              className={s.field}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
