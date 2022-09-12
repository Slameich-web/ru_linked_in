import React, { useState } from 'react';
import './registration.scss';
import { RegistrationButton } from './RegistrationButton';
import { RegistrationErrorMessage } from './RegistrationErrorMessage';
import { RegistrationInputs } from './RegistrationInputs';
import { AuthorizationSocialButtons } from '../Authorization/AuthorizationSocialButtons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const Registration = () => {
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const { error } = useTypedSelector((state) => state.login);
  return (
    <div className='authorization_container'>
      <div
        className={`authorization_wrapper ${
          error
            ? 'authorization_wrapper_border_error'
            : 'authorization_wrapper_border'
        }`}
      >
        <div className='authorization_inside_wrapper'>
          <div className='authorization_inside_wrapper_title'>Регистрация</div>
          <RegistrationInputs setRepeatPassword={setRepeatPassword} />
          <RegistrationErrorMessage />
          <RegistrationButton repeatPassword={repeatPassword} />
          <AuthorizationSocialButtons />
        </div>
      </div>
    </div>
  );
};
