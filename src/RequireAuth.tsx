import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IRequireAuth {
  redirectPath?: string;
  children: React.ReactElement<any>;
  isAuth?: boolean;
}

export const RequireAuth: React.FC<IRequireAuth> = ({ redirectPath = '/login', children, isAuth}) => {
  const user = '';
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length === 0) {
      return navigate(redirectPath);
    } else if (isAuth) {
      return navigate('/');
    }
  }, []);

  return children;
};