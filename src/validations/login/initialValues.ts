interface ILogin {
    email: string;
    password: string
}

export const initialValues: ILogin = {
  email: '',
  password: ''
};