import './SecondPage.scss';
import { useState, useEffect } from 'react';
import { $api } from '../../../http/index';
export const SecondPage = () => {
  useEffect(() => {
    async function asyncQuery() {
      try {
        const { data } = await $api.get('/users/usersCount');
        setNumber(data);
        setIsError(false);
      } catch {
        setIsError(true);
      }
    }
    asyncQuery();
  }, []);

  const [Number, setNumber] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(true);
  return (
    <div className="second_page">
      {isError ? (
        <span className="text">На данный момент пользователей нет</span>
      ) : (
        <span className="text">
          Количество зарегистрированных пользователей:
          <span>{' ' + Number}</span>
        </span>
      )}
      <span className="stick"></span>
      <button className="submit_vacation_button">Разместить вакансию</button>
    </div>
  );
};
