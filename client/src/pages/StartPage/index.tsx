import React from 'react';
import './startPage.scss';

import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
export const StartPage = () => {
  return (
    <div className='main'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
