import { useState, useEffect } from 'react';
import { getCountRegisterUsers } from '../startPageFunctions';

export const SecondPage = () => {
  useEffect(() => {
    getCountRegisterUsers(setNumber, setIsError);
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
