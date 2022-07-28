import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
export interface RequireAuthProps {
  children: React.ReactNode;
}
export const RequireAuth = ({ children }: RequireAuthProps): any => {
  const location = useLocation();
  const { isLogin } = useTypedSelector((state) => state.login);

  if (!isLogin) {
    return <Navigate to='/authorization' state={{ from: location }} />;
  }
  return children;
};
