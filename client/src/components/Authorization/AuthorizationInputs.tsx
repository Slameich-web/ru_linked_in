import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationChangePassword } from './AuthorizationChangePassword';
import { AuthorizationInput } from './AuthorizationInput';

export const AuthorizationInputs = () => {
  const dispatch = useDispatch();
  const handleInputLogin = () => {
    dispatch({ type: 'CHANGE_LOGIN' });
  };
  const handleInputPassword = () => {
    dispatch({ type: 'CHANGE_LOGIN' });
  };
  return (
    <div className='authorization_inside_wrapper_inputs'>
      <div className='authorization_input_login'>
        <AuthorizationInput title='Email' handler={handleInputLogin} />
      </div>
      <div className='authorization_input_password'>
        <AuthorizationInput title='Пароль' handler={handleInputPassword} />
        <AuthorizationChangePassword />
      </div>
    </div>
  );
};
