import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationInput } from '../../components/AuthorizationInput/AuthorizationInput';
import {
  emailinputChange,
  passwordinputChange,
} from '../../store/reducers/loginActions';
import { RegistrationInputsProps } from './types';

export const RegistrationInputs = ({
  setRepeatPassword,
}: RegistrationInputsProps) => {
  const dispatch = useDispatch();
  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(passwordinputChange(e.target.value));
  };
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(emailinputChange(e.target.value));
  };
  const handlerepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };
  return (
    <>
      <div className='registration_input_wrapper'>
        <AuthorizationInput
          type='text'
          title='Email'
          handler={handleInputEmail}
        />
      </div>
      <div className='registration_input_wrapper'>
        <AuthorizationInput
          type='password'
          title='Пароль'
          handler={handleInputPassword}
        />
      </div>
      <div className='registration_input_wrapper'>
        <AuthorizationInput
          type='password'
          title='Повторите пароль'
          handler={handlerepeatPassword}
        />
      </div>
    </>
  );
};
