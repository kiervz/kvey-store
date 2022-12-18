import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/AxiosClient';

import IconGoogle from '../../assets/images/icon-google.svg';
import IconGithub from '../../assets/images/icon-github.svg';
import IconFB from '../../assets/images/icon-fb.svg';
import LoginImage from '../../assets/images/bg-login.png';

import { Input, Button } from '../../components/common';
import { userAction } from '../../redux/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { initialValues, schema } from '../../validations/login';

export const Login = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, isValid } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting }) => {
      loginHandler(values, setSubmitting);
    }
  });

  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const googleLogin = async () => {
    try {
      setLoading1(true);
      const { data } = await axios.get('/api/v1/auth/login/google');
      window.location.replace(data);
    } catch(err: any) {
      const error = err.response.data.message;
      setError(error);
    } finally { setLoading1(false); }
  };

  const githubLogin = async () => {
    try {
      setLoading2(true);
      const { data } = await axios.get('/api/v1/auth/login/github');
      window.location.replace(data);
    } catch(err: any) {
      const error = err.response.data.message;
      setError(error);
    } finally { setLoading2(false); }
  };

  const facebookLogin = () => {
    console.log('under construction facebook auth');
  };

  const loginHandler = async (values: any, setSubmitting: (isSubmitting: boolean) => void) => {
    try {
      const { data } = await axios.post('/api/v1/auth/login', values);

      dispatch(userAction.setUser(data.response));
      
      if (data != null && Boolean(data.response.user.roles.includes(1))) {
        navigate('/dashboard');
      } else if (data != null && Boolean(data.response.user.roles.includes(2))) {
        navigate('/home');
      }
    } catch(err: any) {
      const error = err?.response?.data?.message;
      setError(error);
    } finally { 
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }
  };
  
  return (
    <section className='bg-[#F9FAFB] min-h-screen flex items-center justify-center'>
      <div className='bg-white flex rounded-2xl max-w-5xl shadow-lg'>
        <div className='sm:w-1/2 w-[100%] p-16'>
          <h2 className='font-bold text-2xl'>Login</h2>
          <p className='text-sm mt-4'>Log in your account</p>
          { error != null && <p className='bg-red-200 p-2 rounded mt-4'>{ error }</p>}
          <form className='mt-4 flex flex-col gap-4' onSubmit={handleSubmit} >
            <Input 
              className={`py-2 px-3 rounded-xl border ${errors.email != null ? 'border-2 border-red-600': '1'}`}
              type='text' 
              name='email' 
              placeholder='Email' 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input 
              className={`py-2 px-3 rounded-xl border ${errors.password != null ? 'border-2 border-red-600': '1'}`}
              type='password' 
              name='password' 
              placeholder='Password' 
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button 
              type='submit'
              className='bg-[#020a0f] text-white py-2 rounded-xl enabled:hover:bg-[#212529] disabled:bg-[#6F7275] duration-300'
              btnText={'Login'}
              isDisabled={isSubmitting || (touched != null && !isValid)}
            />
          </form>
          <div className='mt-5 mb-5 grid grid-cols-3 items-center gap-1'>
            <hr />
            <p className='text-center text-gray-500 text-sm'>OR</p>
            <hr />
          </div>
          <Button
            className="bg-white hover:bg-[#F4F4F4] duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black"
            btnText={'Sigin with Google'}
            onClick={googleLogin}
            loading={loading1}
            btnIcon={<img src={IconGoogle} className='mr-2' />}
          />
          <Button 
            className="bg-white hover:bg-[#F4F4F4] duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black"
            onClick={githubLogin}
            loading={loading2}
            btnText={'Sigin with Github'}
            btnIcon={<img src={IconGithub} className='mr-2' />}
          />
          <Button 
            className="bg-white hover:bg-[#F4F4F4] duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black" 
            onClick={facebookLogin}
            loading={loading3}
            btnText={'Sigin with Facebook'}
            btnIcon={<img src={IconFB} className='mr-2' />}
          />
          <div className='mt-8'>
            <p className='text-sm'>
              <span className='text-gray-500'>Not registered yet? </span>
              <span className='font-bold cursor-pointer text-gray-800'><Link to='/register'>Create an Account</Link></span>
            </p>
          </div>
        </div>
        <div className='sm:block hidden relative w-1/2 rounded-r-xl'>
          <img className='rounded-r-xl w-full h-full' src={LoginImage} alt='login logo'/>
          <p className='absolute top-[10%] left-[37%] text-white text-sm font-bold z-10'>
            Nice to see you again
          </p>
          <h2 className='absolute top-[15%] left-[25%] uppercase text-white text-4xl-clamp font-bold z-10'>
            Welcome back
          </h2>
          <p className='absolute top-[80%] left-[35%] text-white text-sm font-bold z-10'>Sign in to continue access</p>
          <p className='absolute bottom-2 left-2 text-white'>www.kierveymaghanoy.com</p>
        </div>
      </div>
    </section>
  );
};