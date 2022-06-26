import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const AuthorizationButtons = () => {
  const dispatch = useDispatch();
  const { login, password } = useTypedSelector((state) => state.login);
  const checkLogin = () => {
    if (login === 'Slame' && password === 'QWERTY') {
      dispatch({ type: 'ENTER' });
    } else {
      dispatch({ type: 'ENTER_ERROR', payload: 'ОШИБКА ВХОДА' });
    }
  };
  return (
    <div>
      <div className='authorization_inside_wrapper_buttons'>
        <button
          className='authorization_button_outline'
          onClick={() => checkLogin()}
        >
          Войти
        </button>
        <button className='authorization_button_primary'>Регистрация</button>
      </div>
    </div>
  );
};
