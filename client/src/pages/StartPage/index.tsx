import React, { useEffect, useLayoutEffect } from 'react';
import './startPage.scss';

import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { $api } from '../../http';
export const StartPage = () => {
  useEffect(() => {
    async function asyncQuery() {
      const count = await $api.get<any>('/users/usersCount');
      console.log(count);
    }
    asyncQuery();
  }, []);
  return (
    <div className='main'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
