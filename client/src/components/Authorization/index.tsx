import React from 'react';
import './authorization.scss';
import { AuthorizationButtons } from './AuthorizationButtons';
import { AuthorizationInputs } from './AuthorizationInputs';
import { AuthorizationSocialButtons } from './AuthorizationSocialButtons';
export const Authorization = () => {
  return (
    <div className='authorization_wrapper'>
      <div className='authorization_inside_wrapper'>
        <div className='authorization_inside_wrapper_title'>Войти</div>
        <AuthorizationInputs />
        <AuthorizationButtons />
        <AuthorizationSocialButtons />
      </div>
    </div>
  );
};
