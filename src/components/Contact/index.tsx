import { useState } from 'react';
import { send } from 'emailjs-com';
import { validate } from '../../utils/validate';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormHelperText from '@mui/material/FormHelperText';

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

    if (errors.textarea || errors.email) return;

    send(
      'service_3c7vv0h', //service_id
      'gmail_template', //nombre del template que cree
      inputFromUser, //data que envío
      'RV7CArNTW2z-3UoJ4' //account/general => Public Key
    )
      .then((response) => {
        setInputFromUser({
          name: '',
          email: '',
          subject: '',
          textarea: '',
        });
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  console.log(errors);

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
              label="Name"
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
              error={errors.email ? true : undefined}
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
              error={errors.textarea ? true : undefined}
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
              disabled={
                errors.textarea ||
                errors.email ||
                inputFromUser.textarea.length <= 0 ||
                inputFromUser.email.length <= 0
                  ? true
                  : false
              }
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
