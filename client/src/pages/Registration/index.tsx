import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationInput } from '../../components/AuthorizationInput/AuthorizationInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  emailinputChange,
  LogininputChange,
  passwordinputChange,
  RegistrationError,
} from '../../store/reducers/loginActions';
import './registration.scss';
export const Registration = () => {
  const dispatch = useDispatch();
  const { password, errorText, email, login } = useTypedSelector(
    (state) => state.login
  );
  const [repeatePassword, setRepeatePassword] = useState('');
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
  const viewData = () => {
    if (
      email !== '' &&
      login !== '' &&
      password !== '' &&
      repeatePassword !== ''
    ) {
      console.log('login');
    }
    console.log('email', email, login, password, repeatePassword);
  };
  return (
    <div className={`authorization_wrapper authorization_wrapper_border`}>
      <div className='authorization_inside_wrapper'>
        <div className='authorization_inside_wrapper_title'>Регистрация</div>
        <div className='registration_input_wrapper'>
          <AuthorizationInput title='Email' handler={handleInputEmail} />
        </div>
        <div className='registration_input_wrapper'>
          <AuthorizationInput title='Логин' handler={handleInputLogin} />
        </div>
        <div className='registration_input_wrapper'>
          <AuthorizationInput title='Пароль' handler={handleInputPassword} />
        </div>
        <div className='registration_input_wrapper'>
          <AuthorizationInput
            title='Повторите пароль'
            handler={handleRepeatePassword}
          />
        </div>
        <div className='registration_button_wrapper'>
          <button
            className='registration_button_primary'
            disabled={!!errorText}
            onClick={() => viewData()}
          >
            Зарегистрироваться
          </button>
        </div>
        <div>{errorText}</div>
      </div>
    </div>
  );
};
