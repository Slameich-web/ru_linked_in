import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from 'axios';
import { $api, API_URL } from '../../http';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginError } from '../../store/reducers/loginActions';
export const RegistrationButton = ({ repeatPassword }: any) => {
  const { password, errorText, email } = useTypedSelector(
    (state) => state.login
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // СДЕЛАТЬ TO LOWERCASE, ВЫПЕЛИТЬ ЛОГИН, СДЕЛАТЬ TRY CATCH, СДЕЛАТЬ ВЫВОД ОШИБКИ, *прикрепить IsError*(как в авторизации)
  function viewData() {
    return async () => {
      try {
        if (repeatPassword === password) {
          const count = await $api.post<any>('/auth/registration', {
            email: email.toLowerCase(),
            password: password,
          });
          navigate('/Authorization');
          console.log(count);
        } else {
          throw new Error('Пароли не совпадают');
        }
      } catch (e: any) {
        console.log(e.response);
        if (e.response) {
          dispatch(LoginError(e.response.data.message));
        } else {
          dispatch(LoginError('Неизвестная ошибка'));
        }
      }
    };
  }
  return (
    <div className='registration_button_wrapper'>
      <button
        className='registration_button_primary'
        disabled={!!errorText}
        onClick={viewData()}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};
