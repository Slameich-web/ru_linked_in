import React from 'react';
import { AuthorizationChangePassword } from './AuthorizationChangePassword';
import { AuthorizationInput } from './AuthorizationInput';

export const AuthorizationInputs = () => {
  return (
    <div className='authorization_inside_wrapper_inputs'>
      <div className='authorization_input_login'>
        <AuthorizationInput title='Email' />
      </div>
      <div className='authorization_input_password'>
        <AuthorizationInput title='Пароль' />
        <AuthorizationChangePassword />
      </div>
    </div>
  );
};
