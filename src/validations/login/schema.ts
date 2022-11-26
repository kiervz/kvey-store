import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('The email field must be a valid email address.').required('The email field is required.'),
  password: yup.string().min(8).required('The password field is required.')
});