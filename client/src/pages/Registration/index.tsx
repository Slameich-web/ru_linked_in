import React, { useState } from 'react';
import './registration.scss';
import { RegistrationButton } from './RegistrationButton';
import { RegistrationErrorMessage } from './RegistrationErrorMessage';
import { RegistrationInputs } from './RegistrationInputs';
import { AuthorizationSocialButtons } from '../Authorization/AuthorizationSocialButtons';
export const Registration = () => {
  const [repeatPassword, setrepeatPassword] = useState<string>('');
  return (
    <div className='authorization_container'>
      <div className={`authorization_wrapper authorization_wrapper_border`}>
        <div className='authorization_inside_wrapper'>
          <div className='authorization_inside_wrapper_title'>Регистрация</div>
          <RegistrationInputs setrepeatPassword={setrepeatPassword} />
          <RegistrationButton repeatPassword={repeatPassword} />
          <RegistrationErrorMessage />
          <AuthorizationSocialButtons />
        </div>
      </div>
    </div>
  );
};
