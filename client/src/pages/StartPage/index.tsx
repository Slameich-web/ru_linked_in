import React from 'react';
import './startPage.scss';

export const StartPage = () => {
  return (
    <div>
      <header className='header'>
        <span className='logo'>ЛинкедИн для пацанов</span>
        <span className='headerStick'></span>
        <span className='logSign'>Войти/Регистрация</span>
      </header>
      <body className='body'>
        <span>Найдите вакансии от лучших компаний</span>
        <input className='searchBar' placeholder='Найти Вакансию'></input>
      </body>
    </div>
  );
};
