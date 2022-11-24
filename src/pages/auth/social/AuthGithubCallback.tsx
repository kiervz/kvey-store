import React, { useEffect } from 'react';
import axios from '../../../config/AxiosClient';

const AuthGithubCallback = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  useEffect(() => {
    axios.post(`/api/v1/auth/callback/github?code=${code}`)
      .then(({ data }) => {
        localStorage.setItem('token', data.response.token);
        window.location.href = '/dashboard';
      }).catch(error => console.log(error));  
  }, []);
  
  return (
    <>
      <p>Please wait...</p>
    </>
  );
};

export default AuthGithubCallback;