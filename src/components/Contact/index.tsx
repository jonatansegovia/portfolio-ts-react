import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormHelperText from '@mui/material/FormHelperText';

import { validate } from '../../utils/validate';

import s from './index.module.css';

type userData = {
  name: string;
  email: string;
  subject: string;
  textarea: string;
};

const Contact = () => {
  const [inputFromUser, setInputFromUser] = useState<userData>({
    name: '',
    email: '',
    subject: '',
    textarea: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    textarea: '',
  });

  const handleInputFromUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFromUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });

    setErrors(
      validate({
        ...inputFromUser,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container id="contact" marginTop="6rem" sx={{ height: '80vh' }}>
        <Grid item xs={12} marginBottom="3rem">
          <Typography variant="h3" align="center">
            Contact Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="name"
              name="name"
              fullWidth
              className={s.field}
              value={inputFromUser.name}
              onChange={handleInputFromUser}
            ></TextField>
            <TextField
              label="Email"
              name="email"
              fullWidth
              required
              className={s.field}
              value={inputFromUser.email}
              onChange={handleInputFromUser}
              error={(errors.email && true) || undefined}
            ></TextField>
            {errors.email && (
              <FormHelperText sx={{ color: 'red' }}>
                {errors.email}
              </FormHelperText>
            )}
            <TextField
              label="Subject"
              name="subject"
              fullWidth
              className={s.field}
              value={inputFromUser.subject}
              onChange={handleInputFromUser}
            ></TextField>
            <TextField
              label="Type Something Here..."
              name="textarea"
              fullWidth
              required
              multiline
              rows={4}
              className={s.field}
              value={inputFromUser.textarea}
              onChange={handleInputFromUser}
              error={(errors.textarea && true) || undefined}
            ></TextField>
            {errors.textarea && (
              <FormHelperText sx={{ color: 'red' }}>
                {errors.textarea}
              </FormHelperText>
            )}
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
