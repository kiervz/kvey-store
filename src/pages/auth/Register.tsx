import React, { useState } from 'react';
import axios from '../../config/AxiosClient';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Select } from '../../components/common';
import { useFormik } from 'formik';
import { initialValues, schema } from '../../validations/register';
import { notifyUser } from '../../utility/MessageHelper';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<any>(null);

  const { values, errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, isValid } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting }) => {
      registerHandler(values, setSubmitting);
    }
  });

  const registerHandler = async (values: any, setSubmitting: (isSubmitting: boolean) => void) => {
    try {
      const { data } = await axios.post('/api/v1/auth/register', values);
      notifyUser('success', data.message);
      navigate('/login');
    } catch(err: any) {
      const status = err?.response?.status;
      let error = err?.response?.data?.message;
      if (status === 422) error = err?.response?.data?.errors?.email[0];
      setError(error);
    } finally { 
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }
  };

  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white flex rounded-2xl max-w-6xl shadow-lg w-[600px]'>
        <div className='w-[100%] p-16'>
          <h2 className='font-bold text-2xl'>Register</h2>
          <p className='text-sm mt-4'>Register to create an account.</p>
          { error != null && <p className='bg-red-200 p-2 rounded mt-6'>{ error }</p>}
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit} className='mt-6'>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className={`p-2 mt-1 w-full rounded-xl border  ${errors.name != null ? 'border-2 border-red-600': ''}`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className={`p-2 mt-1 w-full rounded-xl border  ${errors.email != null ? 'border-2 border-red-600': ''}`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='grid grid-cols-2 gap-1'>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <Select 
                      id="gender" 
                      name="gender" 
                      className={`mt-1 block w-full rounded-xl border bg-white py-2.5 px-3 shadow-sm  ${errors.gender != null ? 'border-2 border-red-600': ''}`}
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                    <Input 
                      type="date" 
                      name="birthday" 
                      id="birthday" 
                      className={`p-2 mt-1 w-full rounded-xl border  ${errors.email != null ? 'border-2 border-red-600': ''}`}
                      value={values.birthday}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <Input 
                    type="password" 
                    name="password"
                    id="password"
                    className={`p-2 mt-1 w-full rounded-xl border  ${errors.email != null ? 'border-2 border-red-600': ''}`}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <Input 
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className={`p-2 mt-1 w-full rounded-xl border  ${errors.email != null ? 'border-2 border-red-600': ''}`}
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <Button 
                  type='submit'
                  className='bg-[#020a0f] text-white py-2 rounded-xl enabled:hover:bg-[#212529] disabled:bg-[#6F7275] duration-300 mt-2'
                  btnText={'Register'}
                  isDisabled={isSubmitting || (touched != null && !isValid)}
                />
              </div>
            </form>
          </div>
          <div className='mt-8'>
            <p className='text-sm'>
              <span className='text-gray-500'>Already have an account? </span>
              <span className='font-bold cursor-pointer text-gray-800'><Link to='/login'>Login here</Link></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;