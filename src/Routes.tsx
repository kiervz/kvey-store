import React from 'react';
import { BrowserRouter, Routes as CRoutes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <CRoutes>
        <Route 
          path='/'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } 
        />
      
        <Route path="/login" element={
          <RequireAuth isAuth>
            <Login />
          </RequireAuth>
        } />
      </CRoutes>
    </BrowserRouter>
  );
};

export default Routes;