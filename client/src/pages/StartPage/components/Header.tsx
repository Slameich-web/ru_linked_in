import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header_start'>
      <span className='logo'>ЛинкедИн для пацанов</span>
      <span className='header_stick'></span>
      <button className='logSign'>Войти / Регистрация</button>
    </div>
  );
};

export default Header;
