import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const AuthorizationButtons = () => {
  const dispatch = useDispatch();
  const { login, password } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  const checkLogin = () => {
    return async () => {
      setTimeout(() => {
        if (login === 'Slame' && password === 'QWERTY') {
          dispatch({ type: 'ENTER' });
          navigate('/profile_page');
        } else {
          dispatch({ type: 'ENTER_ERROR', payload: 'ОШИБКА ВХОДА' });
        }
      }, 500);
    };
  };
  return (
    <div>
      <div className='authorization_inside_wrapper_buttons'>
        <button className='authorization_button_outline' onClick={checkLogin()}>
          Войти
        </button>
        <Link className='authorization_button_link' to='/registration'>
          <button className='authorization_button_primary'>Регистрация</button>
        </Link>
      </div>
    </div>
  );
};
