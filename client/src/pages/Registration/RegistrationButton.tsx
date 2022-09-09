import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { $api } from '../../http';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginError } from '../../store/reducers/loginActions';

export interface RegistrationButtonProps {
  repeatPassword: string;
}

export const RegistrationButton = ({
  repeatPassword,
}: RegistrationButtonProps) => {
  const { password, errorText, email } = useTypedSelector(
    (state) => state.login
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function viewData() {
    return async () => {
      if (repeatPassword === password) {
        try {
          await $api.post<any>('/auth/registration', {
            email: email.toLowerCase(),
            password: password,
          });
          navigate('/Authorization');
        } catch (e: any) {
          if (e.response) {
            dispatch(LoginError(e.response.data.message));
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
