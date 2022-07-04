import { useTypedSelector } from '../../hooks/useTypedSelector';
import React from 'react';

export const AuthorizationErrorMessage = () => {
  const { errorText } = useTypedSelector((state) => state.login);
  return <div className='authorization_error_message'>{errorText}</div>;
};
