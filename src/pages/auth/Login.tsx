import React from 'react';
import { Link } from 'react-router-dom';

import IconGoogle from '../../assets/images/icon-google.svg';
import IconGithub from '../../assets/images/icon-github.svg';
import IconFB from '../../assets/images/icon-fb.svg';
import LoginImage from '../../assets/images/bg-login.png';

import '../../assets/css/blobz.min.css';

const Login = () => {
  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white flex rounded-2xl max-w-5xl shadow-lg'>
        <div className='sm:w-1/2 w-[100%] p-16'>
          <h2 className='font-bold text-2xl'>Login</h2>
          <p className='text-sm mt-4'>Login in your account</p>
          <form className='mt-8 flex flex-col gap-4'>
            <input className='py-2 px-3 rounded-xl border' type='text' name='email' placeholder='Email' />
            <input className='py-2 px-3 rounded-xl border' type='password' name='password' placeholder='Password' />
            <button className='bg-[#001829] text-white py-2 rounded-xl hover:bg-[#002540] hover:scale-105 duration-300'>Login</button>
          </form>
          <div className='mt-5 mb-5 grid grid-cols-3 items-center gap-1'>
            <hr />
            <p className='text-center text-gray-500 text-sm'>OR</p>
            <hr />
          </div>
          <button className="bg-white hover:bg-[#F4F4F4] hover:scale-105 duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black">
            <img src={IconGoogle} className='mr-2' />
            Sigin with Google
          </button>
          <button className="bg-white hover:bg-[#F4F4F4] hover:scale-105 duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black">
            <img src={IconGithub} className='mr-2' />
            Sigin with Github
          </button>
          <button className="bg-white hover:bg-[#F4F4F4] hover:scale-105 duration-300 border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-sm text-black">
            <img src={IconFB} className='mr-2' />
            Sigin with Facebook
          </button>
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

export default Login;