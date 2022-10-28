import { Helmet } from 'react-helmet';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './authorization.scss';
import { AuthorizationButtons } from './AuthorizationButtons';
import { AuthorizationInputs } from './AuthorizationInputs';
import { AuthorizationSocialButtons } from './AuthorizationSocialButtons';

export const Authorization = () => {
  const { error } = useTypedSelector(({ login }) => login);
  return (
    <div className="authorization_main_container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Авторизация</title>
      </Helmet>
      <div
        className={`authorization_wrapper ${
          error ? 'authorization_wrapper_border_error' : 'authorization_wrapper_border'
        }`}
      >
        <div className="authorization_inside_wrapper">
          <div className="authorization_inside_wrapper_title">Войти</div>
          <AuthorizationInputs />
          <AuthorizationButtons />
          <AuthorizationSocialButtons />
        </div>
      </div>
    </div>
  );
};
