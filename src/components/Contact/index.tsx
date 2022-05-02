import { useState } from 'react';
import { useSelector } from 'react-redux';
import { send } from 'emailjs-com';
import { validate } from '../../utils/validate';

import BasicModal from '../BasicModal';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormHelperText from '@mui/material/FormHelperText';
import LoadingButton from '@mui/lab/LoadingButton';

import s from './index.module.css';
import Spinner from '../Spinner';

type userData = {
  name: string;
  email: string;
  subject: string;
  textarea: string;
};

type RootState = {
  language: string;
};

const {
  REACT_APP_SERVICE_ID: service_id,
  REACT_APP_TEMPLATE: template,
  REACT_APP_PUBLIC_KEY: public_key,
}: any = process.env;

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

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const { language }: any = useSelector<RootState>((state) => state.language);

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

    setShowLoading(true);

    send(service_id, template, inputFromUser, public_key)
      .then((response) => {
        setInputFromUser({
          name: '',
          email: '',
          subject: '',
          textarea: '',
        });

        setShowModal(true);
        setShowLoading(false);

        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Grid container id="contact" marginTop="6rem" sx={{ height: '80vh' }}>
        <Grid item xs={12} marginBottom="3rem">
          <Typography variant="h3" align="center">
            {language === 'ENG' ? 'Contact Me' : 'Contactame'}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label={language === 'ENG' ? 'Name' : 'Nombre'}
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
              label={language === 'ENG' ? 'Subject' : 'Asunto'}
              name="subject"
              fullWidth
              className={s.field}
              value={inputFromUser.subject}
              onChange={handleInputFromUser}
            ></TextField>

            <TextField
              label={
                language === 'ENG'
                  ? 'Type Something Here...'
                  : 'Escribe algo aquí'
              }
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
            {showLoading && <Spinner />}
            <LoadingButton
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
              loading={showLoading}
            >
              {language === 'ENG' ? 'Submit' : 'Enviar'}
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
      {showModal && (
        <BasicModal
          handleClose={handleClose}
          open={showModal}
          title={language === 'ENG' ? 'Message Send!' : 'Mensaje Enviado!'}
          text={undefined}
        />
      )}
    </Container>
  );
};

export default Contact;
