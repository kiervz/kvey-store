import React, { useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/features/user/userSlice';

export const AuthGoogleCallback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authCallback = async () => {
    try {
      const { data } = await axios.post(`/api/v1/auth/callback/google?code=${code}`);
      dispatch(userAction.setUser(data.response));

      if (data != null && Boolean(data.response.user.roles.includes(1))) { 
        navigate('/dashboard');
      } else if (data != null && Boolean(data.response.user.roles.includes(2))) {
        navigate('/home');
      }
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    }
  };
  
  useEffect(() => {
    authCallback();
  }, []);
  
  return null;
};

export default AuthGoogleCallback;