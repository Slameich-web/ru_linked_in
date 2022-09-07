import React, { useEffect, useLayoutEffect, useState } from 'react';
import './startPage.scss';
import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { $api } from '../../http';
import { Axios, AxiosResponse } from 'axios';
export const StartPage = () => {
  return (
    <div className='main'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
