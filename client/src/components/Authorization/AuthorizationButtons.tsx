import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateInterface } from '../../main';
export const AuthorizationButtons = () => {
  const dispatch = useDispatch();
  const { login, password } = useSelector(
    (state: initialStateInterface) => state
  );
  const checkLogin = (login: string, password: string) => {
    if (login.length > 0 && password.length > 0) {
      dispatch({ type: 'LOGIN' });
    }
  };
  return (
    <div>
      <div className='authorization_inside_wrapper_buttons'>
        <button
          className='authorization_button_outline'
          onClick={() => checkLogin(login, password)}
        >
          Войти
        </button>
        <button className='authorization_button_primary'>Регистрация</button>
      </div>
    </div>
  );
};
