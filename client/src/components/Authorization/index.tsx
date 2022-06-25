import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './authorization.scss';
import { AuthorizationButtons } from './AuthorizationButtons';
import { AuthorizationInputs } from './AuthorizationInputs';
import { AuthorizationSocialButtons } from './AuthorizationSocialButtons';
export const Authorization: FC = () => {
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
