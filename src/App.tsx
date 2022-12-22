import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPages, RequireAuth } from './containers';
import { roles } from './constants';

import { Login, Logout, Register, AuthGoogleCallback, AuthGithubCallback } from './pages/auth';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Home from './pages/customer/home/Home';
import Missing from './pages/missing/Missing';
import Landing from './pages/landing/Landing';
import { Shop } from './pages/shop/Shop';
import { Content, Navbar } from './layouts';
import { Cart } from './pages/customer/cart/Cart';
import { OrderSuccess } from './pages/customer/success/OrderSuccess';
import { Product } from './pages/prouct/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Content>
        <Routes>
          {/* Public routes */}
          <Route element={<AuthPages />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/auth/google/callback" element={<AuthGoogleCallback />} />
            <Route path="/auth/github/callback" element={<AuthGithubCallback />} />
          </Route>
          <Route path='/' element={<Landing />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:slug' element={<Product />} />

          {/* Protect these Admin routes  */}
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN]}/>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>    

          {/* Protect these Customer routes */}
          <Route element={<RequireAuth allowedRoles={[roles.CUSTOMER]}/>}>
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/success' element={<OrderSuccess />} />
          </Route>        

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;
