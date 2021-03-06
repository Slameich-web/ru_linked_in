import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './authorization.scss';
import { AuthorizationButtons } from './AuthorizationButtons';
import { AuthorizationInputs } from './AuthorizationInputs';
import { AuthorizationSocialButtons } from './AuthorizationSocialButtons';

export const Authorization: FC = () => {
  const { error } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location?.state || '/';
  return (
    <div
      className={`authorization_wrapper ${
        error
          ? 'authorization_wrapper_border_error'
          : 'authorization_wrapper_border'
      }`}
    >
      <div className='authorization_inside_wrapper'>
        <div className='authorization_inside_wrapper_title'>Войти</div>
        <AuthorizationInputs />
        <AuthorizationButtons />
        <AuthorizationSocialButtons />
      </div>
    </div>
  );
};
