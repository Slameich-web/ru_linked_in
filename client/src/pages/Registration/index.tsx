import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationInput } from '../../components/AuthorizationInput/AuthorizationInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  emailinputChange,
  LogininputChange,
  passwordinputChange,
} from '../../store/reducers/loginActions';
import './registration.scss';
import { RegistrationButton } from './RegistrationButton';
import { RegistrationErrorMessage } from './RegistrationErrorMessage';
import { RegistrationInputs } from './RegistrationInputs';
export const Registration = () => {
  const dispatch = useDispatch();
  const { password, errorText, email, login } = useTypedSelector(
    (state) => state.login
  );
  const [repeatePassword, setRepeatePassword] = useState('');
  const handleRepeatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatePassword(e.target.value);
  };
  return (
    <div className='authorization_container'>
      <div className={`authorization_wrapper authorization_wrapper_border`}>
        <div className='authorization_inside_wrapper'>
          <div className='authorization_inside_wrapper_title'>Регистрация</div>
          <RegistrationInputs setRepeatePassword={setRepeatePassword} />
          <RegistrationButton repeatePassword={repeatePassword} />
          <RegistrationErrorMessage />
        </div>
      </div>
    </div>
  );
};
