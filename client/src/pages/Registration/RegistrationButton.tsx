import { useTypedSelector } from '../../hooks/useTypedSelector';
import { $api } from '../../http';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CancelError, LoginError } from '../../store/reducers/loginActions';
import { AxiosError, AxiosResponse } from 'axios';
import { RegistrationButtonProps, RegistrationResponse } from './types';

export const RegistrationButton = ({ repeatPassword }: RegistrationButtonProps) => {
  const { password, email } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function viewData() {
    return async () => {
      if (repeatPassword === password) {
        try {
          await $api.post<AxiosResponse<RegistrationResponse>>('/auth/registration', {
            email: email.toLowerCase(),
            password: password
          });
          navigate('/Authorization');
        } catch (e: unknown) {
          dispatch(LoginError('Ошибка сервера'));
          if (e instanceof AxiosError) {
            dispatch(LoginError(e?.response?.data.message));
          } else {
            dispatch(LoginError('Неизвестная ошибка'));
          }
        }
      } else {
        dispatch(LoginError('Пароли не совпадают'));
      }
    };
  }
  return (
    <div className="registration_button_wrapper">
      <Link className="authorization_button_link" to="/authorization">
        <button onClick={() => dispatch(CancelError())} className="registration_button_outline">
          &#8656;
        </button>
      </Link>
      <button className="registration_button_primary" onClick={viewData()}>
        Зарегистрироваться
      </button>
    </div>
  );
};
