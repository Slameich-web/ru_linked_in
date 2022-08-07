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
        <div className='firstPage'>
          <span>Найдите вакансии от лучших компаний</span>
          {''}
          <input className='searchBar' placeholder='Найти Вакансию'></input>
        </div>
        <div className='secondPage'>
          <span>Размести свою вакансию и найди специалистов</span>
          {''}
          <span className='secondPageStick'></span>
          {''}
          <button className='submitVacationButton'>Разместить вакансию</button>
        </div>
        <div className='thirdPage'>
          <span>Начни общаться с коллегами</span>
          <span className='verticalStick'></span>
          <span>
            “Сайт нейм” позволяет общаться с единомышленниками и обмениваться
            опытом
          </span>
        </div>
        <footer>Данный сайт был сделан только ради денег</footer>
      </body>
    </div>
  );
};
