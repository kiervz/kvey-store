import React, { useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAction } from '../../../redux/features/user/userSlice';

const AuthGithubCallback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post(`/api/v1/auth/callback/github?code=${code}`)
      .then(({ data }) => {
        dispatch(userAction.setUser(data.response));
        if (data != null && Boolean(data.response.user.roles.includes(1))) {
          navigate('/dashboard');
        } else if (data != null && Boolean(data.response.user.roles.includes(2))) {
          navigate('/home');
        }
      }).catch(error => console.log(error));  
  }, []);
  
  return (
    <>
      <p>Please wait...</p>
    </>
  );
};

export default AuthGithubCallback;