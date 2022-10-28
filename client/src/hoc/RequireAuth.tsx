import { useLocation, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RequireAuthProps } from './types';

export const RequireAuth = ({ children }: RequireAuthProps): any => {
  const location = useLocation();
  const { isLogin } = useTypedSelector((state) => state.login);

  if (!isLogin) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }
  return children;
};
