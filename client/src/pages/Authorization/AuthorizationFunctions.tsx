import { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction } from 'redux';
import { $api } from '../../http';
import { LoginError } from '../../store/reducers/loginActions';
import { IAuthLogin } from './types';

export const Auth = (navigate: NavigateFunction, dispatch: Dispatch<AnyAction>, email?: string, password?: string) => {
  return async () => {
    try {
      const response = await $api.post<IAuthLogin>('/auth/login', {
        email: email?.toLowerCase(),
        password
      });
      localStorage.setItem('token', response.data.token);
      dispatch({ type: 'ENTER' });
      navigate('/profile_page');
    } catch (e: unknown) {
      dispatch(LoginError('Ошибка сервера'));
      if (e instanceof AxiosError && e.response?.data.message) {
        dispatch(LoginError(e?.response?.data.message));
      }
    }
  };
};
