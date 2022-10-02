import { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction } from 'redux';
import { $api } from '../../http';
import { CancelError, LoginError } from '../../store/reducers/loginActions';
import { RegistrationResponse } from './types';

export function Registration(
  navigate: NavigateFunction,
  dispatch: Dispatch<AnyAction>,
  email: string,
  repeatPassword: string,
  password?: string
) {
  return async () => {
    dispatch(CancelError());
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
export const cancelError = (dispatch: Dispatch<AnyAction>) => {
  return () => dispatch(CancelError());
};
