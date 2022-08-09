import React from 'react';
import './startPage.scss';

export const StartPage = () => {
  return (
    <div>
      <header className='headerStart'>
        <span className='logo'>ЛинкедИн для пацанов</span>
        <span className='headerStick'></span>
        <button className='logSign'>Войти / Регистрация</button>
      </header>
      <div className='bodyStart'>
        <div className='firstPage'>
          <span>Найдите вакансии от лучших компаний</span>
          {''}
          <input className='searchBar' placeholder='Найти Вакансию'></input>
        </div>
        <div className='secondPage'>
          <span className='secondPageText'>
            Размести свою вакансию и найди специалистов
          </span>
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
        <footer className='footerStart'>
          <span>Данный сайт был сделан только ради денег</span>
        </footer>
      </div>
    </div>
  );
};
