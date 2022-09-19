import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthorizationChangePassword } from './AuthorizationChangePassword';
import { AuthorizationErrorMessage } from './AuthorizationErrorMessage';
import { AuthorizationInput } from '../../components/AuthorizationInput/AuthorizationInput';
import { LogininputChange, passwordinputChange } from '../../store/reducers/loginActions';

export const AuthorizationInputs = () => {
  const dispatch = useDispatch();
  const handleInputLogin = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(LogininputChange(e.target.value));
  };
  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(passwordinputChange(e.target.value));
  };
  return (
    <div className="authorization_inside_wrapper_inputs">
      <div className="authorization_input_login">
        <AuthorizationInput title="Email" handler={handleInputLogin} />
      </div>
      <div className="authorization_input_password">
        <AuthorizationInput type="password" title="Пароль" handler={handleInputPassword} />
        <AuthorizationErrorMessage />
        <AuthorizationChangePassword />
      </div>
    </div>
  );
};
