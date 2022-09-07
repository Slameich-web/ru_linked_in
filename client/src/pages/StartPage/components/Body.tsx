import React from 'react';
import { useEffect } from 'react';
import './Body.scss';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import { $api } from 'c:/papasha/ru_linked_in/client/src/http/index';
export const Body = () => {
  useEffect(() => {
    async function asyncQuery() {
      const count = await $api.get<any>('/users/usersCount');
    }
    asyncQuery();
  }, []);
  return (
    <div className='start_page_body_start'>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};
