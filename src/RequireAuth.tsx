import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IRequireAuth {
  redirectPath?: string;
  children: React.ReactElement<any>;
  isAuthPage?: boolean;
}

export const RequireAuth: React.FC<IRequireAuth> = ({ redirectPath = '/login', children, isAuthPage}) => {
  const user = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      return navigate(redirectPath);
    } else if (isAuthPage) {
      return navigate('/');
    }
  }, []);

  return children;
};