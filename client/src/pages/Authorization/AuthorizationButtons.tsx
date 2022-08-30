import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChangeIsLoading, LoginError } from '../../store/reducers/loginActions';
import { $api } from '../../http';
import { AxiosResponse } from 'axios';
interface IAuthLogin {
  token: string;
}
export const AuthorizationButtons = () => {
  const dispatch = useDispatch();
  const { login, password, isLoading } = useTypedSelector(
    (state) => state.login
  );
  const navigate = useNavigate();
  const checkLogin = () => {
    return () => {
      dispatch(ChangeIsLoading(true));
      setTimeout(() => {
        if (login?.toLowerCase() === 'slame@mail.ru' && password === 'QWERTY') {
          dispatch({ type: 'ENTER' });
          navigate('/profile_page');
        } else {
          dispatch(LoginError('Ошибка входа'));
        }
        dispatch(ChangeIsLoading(false));
      }, 500);
    };
  };
  // test todo
  const Auth = async (
    email?: string,
    password?: string
  ): Promise<AxiosResponse<IAuthLogin>> => {
    return $api.post<IAuthLogin>('/auth/login', { email, password });
  };
  return (
    <div>
      <div className='authorization_inside_wrapper_buttons'>
        <button
          disabled={isLoading}
          className='authorization_button_outline'
          onClick={() => Auth(login, password).then((res) => console.log(res))}
        >
          Войти
        </button>
        <Link className='authorization_button_link' to='/registration'>
          <button disabled={isLoading} className='authorization_button_primary'>
            Регистрация
          </button>
        </Link>
      </div>
    </div>
  );
};
