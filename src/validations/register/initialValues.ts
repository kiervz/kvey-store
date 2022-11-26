interface IRegister {
  name: string;
  email: string;
  gender: 'male' | 'female';
  birthday: string;
  password: string;
  password_confirmation: string;
}

export const initialValues: IRegister = {
  name: '',
  email: '',
  gender: 'male',
  birthday: '',
  password: '',
  password_confirmation: ''
};