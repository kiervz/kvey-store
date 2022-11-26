import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface IRequireAuth {
  allowedRoles: number[]
}

export const RequireAuth = ({ allowedRoles } :IRequireAuth) => {
  const userState = useSelector((state: any) => state.user.user);
  const location = useLocation();

  return (
    userState?.data?.roles?.find((role: number) => allowedRoles?.includes(role))
      ? <Outlet />
      : userState?.token
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
};