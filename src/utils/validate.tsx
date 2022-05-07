type userData = {
  email: string;
  textarea: string;
};

export const validate = (userData: userData) => {
  let errors: userData = { email: '', textarea: '' };

  console.log(userData);

  if (!userData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'Email is invalid';
  }

  if (userData.textarea.length < 10) {
    errors.textarea = 'Please, type some words...';
  }

  return errors;
};
