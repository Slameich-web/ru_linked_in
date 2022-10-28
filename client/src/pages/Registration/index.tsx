import { useState } from 'react';
import './registration.scss';
import { RegistrationButton } from './RegistrationButton';
import { RegistrationErrorMessage } from './RegistrationErrorMessage';
import { RegistrationInputs } from './RegistrationInputs';
import { AuthorizationSocialButtons } from '../Authorization/AuthorizationSocialButtons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Helmet } from 'react-helmet';
export const Registration = () => {
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const { error } = useTypedSelector(({ login }) => login);
  return (
    <div className="authorization_container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Регистрация</title>
        <link rel="icon" href="/icon.png" />
      </Helmet>
      <div
        className={`authorization_wrapper ${
          error ? 'authorization_wrapper_border_error' : 'authorization_wrapper_border'
        }`}
      >
        <div className="authorization_inside_wrapper">
          <div className="authorization_inside_wrapper_title">Регистрация</div>
          <RegistrationInputs setRepeatPassword={setRepeatPassword} />
          <RegistrationErrorMessage />
          <RegistrationButton repeatPassword={repeatPassword} />
          <AuthorizationSocialButtons />
        </div>
      </div>
    </div>
  );
};
