import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const RegistrationErrorMessage = () => {
  const { errorText } = useTypedSelector((state) => state.login);
  return <div className='registration_error_message'>{errorText}</div>;
};
