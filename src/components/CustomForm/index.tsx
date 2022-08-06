import { useState, useReducer } from 'react';

import { validate } from '../../utils/validate';
import { send } from 'emailjs-com';

import TextField from '@mui/material/TextField';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FormHelperText from '@mui/material/FormHelperText';
import LoadingButton from '@mui/lab/LoadingButton';

// import s from './index.module.css';
import Spinner from '../Spinner';

type FormType = {
  language: string;
  handleModal: (openModal: boolean) => any;
};

const {
  REACT_APP_SERVICE_ID: service_id,
  REACT_APP_TEMPLATE: template,
  REACT_APP_PUBLIC_KEY: public_key,
}: any = process.env;

type formState = {
  showLoading: boolean;
  name: string;
  email: string;
  subject: string;
  textarea: string;
};

type formAction = {
  type: 'showLoading' | 'input from user' | 'restart form fields';
  payload?: any;
  field?: any;
};

const initialState = {
  showLoading: false,
  name: '',
  email: '',
  subject: '',
  textarea: '',
};

const formReducer = (state: formState, action: formAction) => {
  switch (action.type) {
    case 'showLoading':
      return { ...state, showLoading: !state.showLoading };
    case 'input from user':
      return { ...state, [action.field]: action.payload };
    case 'restart form fields':
      return {
        ...state,
        name: '',
        email: '',
        subject: '',
        textarea: '',
      };
  }
};

const CustomForm = (props: FormType) => {
  const [formState, dispatchFormData] = useReducer(formReducer, initialState);

  const [errors, setErrors] = useState({
    email: '',
    textarea: '',
  });

  const handleInputFromUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchFormData({
      type: 'input from user',
      field: e.target.name,
      payload: e.target.value,
    });

    setErrors(
      validate({
        ...formState,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (errors.textarea || errors.email) return;

    dispatchFormData({ type: 'showLoading' });

    send(service_id, template, formState, public_key)
      .then((response) => {
        dispatchFormData({ type: 'restart form fields' });

        props.handleModal(true);
        dispatchFormData({ type: 'showLoading' });

        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const name_field = (
    <TextField
      label={props.language === 'ENG' ? 'Name' : 'Nombre'}
      name='name'
      fullWidth
      className='field'
      value={formState.name}
      onChange={handleInputFromUser}
    ></TextField>
  );

  const email_field = (
    <TextField
      label='Email'
      name='email'
      fullWidth
      required
      className='field'
      value={formState.email}
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
      name='subject'
      fullWidth
      className='field'
      value={formState.subject}
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
      name='textarea'
      fullWidth
      required
      multiline
      rows={4}
      className='field'
      value={formState.textarea}
      onChange={handleInputFromUser}
      error={errors.textarea ? true : undefined}
    ></TextField>
  );

  const text_area_error = errors.textarea && (
    <FormHelperText sx={{ color: 'red' }}>{errors.textarea}</FormHelperText>
  );

  const spinner = formState.showLoading && <Spinner />;

  const button = (
    <LoadingButton
      type='submit'
      variant='contained'
      endIcon={<KeyboardArrowRight />}
      className='field'
      disabled={
        errors.textarea ||
        errors.email ||
        formState.textarea.length <= 0 ||
        formState.email.length <= 0
          ? true
          : false
      }
      loading={formState.showLoading}
    >
      {props.language === 'ENG' ? 'Submit' : 'Enviar'}
    </LoadingButton>
  );

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
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
