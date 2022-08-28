import React, { useState } from 'react';
import './registration.scss';
import { RegistrationButton } from './RegistrationButton';
import { RegistrationErrorMessage } from './RegistrationErrorMessage';
import { RegistrationInputs } from './RegistrationInputs';
export const Registration = () => {
  const [repeatePassword, setRepeatePassword] = useState('');
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
