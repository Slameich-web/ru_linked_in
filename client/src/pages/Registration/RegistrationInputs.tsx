import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationInput } from '../../components/AuthorizationInput/AuthorizationInput';
import {
  emailinputChange,
  LogininputChange,
  passwordinputChange,
} from '../../store/reducers/loginActions';

export const RegistrationInputs = (
  setRepeatePassword: Dispatch<SetStateAction<string>>
) => {
  const dispatch = useDispatch();
  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(passwordinputChange(e.target.value));
  };
  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(LogininputChange(e.target.value));
  };
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(emailinputChange(e.target.value));
  };
  const handleRepeatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatePassword(e.target.value);
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
          type='text'
          title='Логин'
          handler={handleInputLogin}
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
          handler={handleRepeatePassword}
        />
      </div>
    </>
  );
};
