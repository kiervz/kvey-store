import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('The name field is required.'),
  gender: yup.string().required('The gender field is required.'),
  birthday: yup.date().default(() => new Date()),
  email: yup
    .string()
    .email('The email field must be a valid email address.')
    .required('The email field is required.'),
  password: yup.string().min(8).required('The password field is required.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'The password confirmation does not match.')
    .required('The password confirmation field is required.')
});