import './SecondPage.scss';
import React from 'react';
export const SecondPage = () => {
  return (
    <div className='second_page'>
      <span className='second_page_text'>
        Размести свою вакансию и найди специалистов
      </span>
      {''}
      <span className='second_page_stick'></span>
      {''}
      <button className='submit_vacation_button'>Разместить вакансию</button>
    </div>
  );
};
