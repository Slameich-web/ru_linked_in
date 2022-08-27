import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const RegistrationButton = ({ repeatePassword }: any) => {
  const { password, errorText, email, login } = useTypedSelector(
    (state) => state.login
  );
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
    <div className='registration_button_wrapper'>
      <button
        className='registration_button_primary'
        disabled={!!errorText}
        onClick={() => viewData()}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};
