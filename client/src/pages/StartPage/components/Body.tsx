import React from 'react';
import './Body.scss';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
export const Body = () => {
  return (
    <div className='start_page_body_start'>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};
