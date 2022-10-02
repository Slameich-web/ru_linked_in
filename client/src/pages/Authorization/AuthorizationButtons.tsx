import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CancelError } from '../../store/reducers/loginActions';
import { Auth } from './AuthorizationFunctions';

export const AuthorizationButtons = () => {
  const dispatch = useDispatch();
  const { login, password, isLoading } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  return (
    <div>
      <div className="authorization_inside_wrapper_buttons">
        <button
          disabled={isLoading}
          className="authorization_button_outline"
          onClick={Auth(navigate, dispatch, login, password)}
        >
          Войти
        </button>
        <Link className="authorization_button_link" to="/registration">
          <button onClick={() => dispatch(CancelError())} disabled={isLoading} className="authorization_button_primary">
            Регистрация
          </button>
        </Link>
      </div>
    </div>
  );
};
