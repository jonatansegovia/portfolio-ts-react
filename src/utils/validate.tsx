type userData = {
  email: string;
  textarea: string;
};

export const validate = (userData: userData) => {
  let errors: userData = { email: '', textarea: '' };

  if (!userData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'Email is invalid';
  }

  if (userData.textarea.length < 10) {
    console.log(userData.textarea.length, 33333);
    errors.textarea = 'Please, type some words...';
  }

  return errors;
};
