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
  const Auth = (email?: string, password?: string) => {
    return async () => {
      try {
        const response = await $api.post<IAuthLogin>('/auth/login', {
          email: email?.toLowerCase(),
          password,
        });
        localStorage.setItem('token', response.data.token);
        dispatch({ type: 'ENTER' });
        navigate('/profile_page');
      } catch (e: any) {
        dispatch(LoginError(e.response.data.message));
      }
    };
  };
  return (
    <div>
      <div className='authorization_inside_wrapper_buttons'>
        <button
          disabled={isLoading}
          className='authorization_button_outline'
          onClick={Auth(login, password)}
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
