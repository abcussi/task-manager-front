// src/components/PrivateRoute.tsx
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = document.cookie.includes('x-access-token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
