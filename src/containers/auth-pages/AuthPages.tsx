import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthPages = () => {
  const userState = useSelector((state: any) => state.user.user);
  const location = useLocation();

  return (
    !userState?.token 
      ? <Outlet /> 
      : userState?.data?.roles.includes(1)
        ? <Navigate to="/dashboard" state={{ from: location }} replace /> 
        : <Navigate to="/home" state={{ from: location }} replace />
  );
};
