import { useEffect } from 'react';
import axios from '../../config/AxiosClient';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../redux/features/user/userSlice';
import { cartAction } from '../../redux/features/cart/cartSlice';

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try { 
      await axios.post('/api/v1/auth/logout');
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      dispatch(cartAction.removeCart());
      dispatch(userAction.removeUser());
      navigate('/login');
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default Logout;