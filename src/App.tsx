import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPages, RequireAuth } from './containers';
import { roles } from './constants';

const Login = React.lazy(() => import('./pages/auth/Login'));
const Logout = React.lazy(() => import('./pages/auth/Logout'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const AuthGoogleCallback = React.lazy(() => import('./pages/auth/social/AuthGoogleCallback'));
const AuthGithubCallback = React.lazy(() => import('./pages/auth/social/AuthGithubCallback'));
const Dashboard = React.lazy(() => import('./pages/admin/dashboard/Dashboard'));
const Home = React.lazy(() => import('./pages/customer/home/Home'));
const Missing = React.lazy(() => import('./pages/missing/Missing'));
const Landing = React.lazy(() => import('./pages/landing/Landing'));
const Shop = React.lazy(() => import('./pages/shop/Shop'));
const Content = React.lazy(() => import('./layouts/Content'));
const Navbar = React.lazy(() => import('./layouts/Navbar'));
const Cart = React.lazy(() => import('./pages/customer/cart/Cart'));
const OrderSuccess = React.lazy(() => import('./pages/customer/success/OrderSuccess'));
const Product = React.lazy(() => import('./pages/prouct/Product'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
