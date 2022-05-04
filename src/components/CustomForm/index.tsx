import { useState } from 'react';

import { validate } from '../../utils/validate';
import { send } from 'emailjs-com';

import TextField from '@mui/material/TextField';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormHelperText from '@mui/material/FormHelperText';
import LoadingButton from '@mui/lab/LoadingButton';

import s from './index.module.css';
import Spinner from '../Spinner';

type FormType = {
  language: string;
  handleModal: (openModal: boolean) => any;
};

type userData = {
  name: string;
  email: string;
  subject: string;
  textarea: string;
};

const {
  REACT_APP_SERVICE_ID: service_id,
  REACT_APP_TEMPLATE: template,
  REACT_APP_PUBLIC_KEY: public_key,
}: any = process.env;

const CustomForm = (props: FormType) => {
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

  const [showLoading, setShowLoading] = useState<boolean>(false);

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

        props.handleModal(true);
        setShowLoading(false);

        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const name_field = (
    <TextField
      label={props.language === 'ENG' ? 'Name' : 'Nombre'}
      name="name"
      fullWidth
      className={s.field}
      value={inputFromUser.name}
      onChange={handleInputFromUser}
    ></TextField>
  );

  const email_field = (
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
  );

  const email_field_error = errors.email && (
    <FormHelperText sx={{ color: 'red' }}>{errors.email}</FormHelperText>
  );

  const subject_field = (
    <TextField
      label={props.language === 'ENG' ? 'Subject' : 'Asunto'}
      name="subject"
      fullWidth
      className={s.field}
      value={inputFromUser.subject}
      onChange={handleInputFromUser}
    ></TextField>
  );

  const text_area = (
    <TextField
      label={
        props.language === 'ENG'
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
  );

  const text_area_error = errors.textarea && (
    <FormHelperText sx={{ color: 'red' }}>{errors.textarea}</FormHelperText>
  );

  const spinner = showLoading && <Spinner />;

  const button = (
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
      {props.language === 'ENG' ? 'Submit' : 'Enviar'}
    </LoadingButton>
  );

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      {name_field}
      {email_field}
      {email_field_error}
      {subject_field}
      {text_area}
      {text_area_error}
      {spinner}
      {button}
    </form>
  );
};

export default CustomForm;
