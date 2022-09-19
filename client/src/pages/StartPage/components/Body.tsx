import { useEffect } from 'react';
import './Body.scss';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import { $api } from '../../../http/index';
import { AxiosResponse } from 'axios';
export const Body = () => {
  useEffect(() => {
    async function getUsersCount() {
      await $api.get<AxiosResponse<number>>('/users/usersCount');
    }
    getUsersCount();
  }, []);
  return (
    <div className="start_page_body_start">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};
