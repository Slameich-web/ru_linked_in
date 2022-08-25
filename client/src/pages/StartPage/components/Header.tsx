import React from 'react';
import './Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Authorization } from '../../Authorization';

export const Header = () => {
  return (
    <div className='header_start'>
      <span className='logo'>ЛинкедИн для пацанов</span>
      <Link to='Authorization' className='Link'>
        <button className='log_sign'>Войти / Регистрация</button>
      </Link>
      <Routes>
        <Route path='Authorization' element={<Authorization />} />
      </Routes>
    </div>
  );
};

export default Header;
