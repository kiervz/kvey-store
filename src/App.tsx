import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPages, RequireAuth } from './containers';
import { roles } from './constants';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Home from './pages/customer/home/Home';
import Missing from './pages/missing/Missing';
import AuthGoogleCallback from './pages/auth/social/AuthGoogleCallback';
import AuthGithubCallback from './pages/auth/social/AuthGithubCallback';
import Landing from './pages/landing/Landing';
import { Shop } from './pages/shop/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthPages />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/auth/google/callback" element={<AuthGoogleCallback />} />
          <Route path="/auth/github/callback" element={<AuthGithubCallback />} />
        </Route>
        <Route path='/' element={<Landing />} />
        <Route path='/shop' element={<Shop />} />

        {/* Protect these Admin routes  */}
        <Route element={<RequireAuth allowedRoles={[roles.ADMIN]}/>}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>    

        {/* Protect these Customer routes */}
        <Route element={<RequireAuth allowedRoles={[roles.CUSTOMER]}/>}>
          <Route path='/home' element={<Home />} />
        </Route>        

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
