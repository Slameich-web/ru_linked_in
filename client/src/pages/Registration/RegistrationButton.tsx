import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CancelError } from '../../store/reducers/loginActions';
import { RegistrationButtonProps } from './types';
import { cancelError, Registration } from './RegistrationFunctions';

export const RegistrationButton = ({ repeatPassword }: RegistrationButtonProps) => {
  const { password, email } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="registration_button_wrapper">
      <Link className="authorization_button_link" to="/authorization">
        <button onClick={cancelError(dispatch)} className="registration_button_outline">
          &#8656;
        </button>
      </Link>
      <button
        className="registration_button_primary"
        onClick={Registration(navigate, dispatch, email, repeatPassword, password)}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};
