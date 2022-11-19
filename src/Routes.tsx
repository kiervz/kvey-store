import React from 'react';
import { BrowserRouter, Routes as CRoutes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Landing from './pages/landing/Landing';

const Routes = () => {
  return (
    <BrowserRouter>
      <CRoutes>
        <Route path='/' element={<Landing />}/> 
        <Route 
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } 
        />
      
        <Route path="/login" element={
          <RequireAuth isAuthPage>
            <Login />
          </RequireAuth>
        } />
        <Route path="/register" element={
          <RequireAuth redirectPath='/register' isAuthPage>
            <Register />
          </RequireAuth>
        } />
      </CRoutes>
    </BrowserRouter>
  );
};

export default Routes;