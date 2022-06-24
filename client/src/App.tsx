import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Authorization } from './components/Authorization';
import { initialStateInterface } from './main';

const App = () => {
  const IsLogin = useSelector((state: initialStateInterface) => state.IsLogin);
  return !IsLogin ? (
    <div className='App'>
      <Authorization />
    </div>
  ) : (
    <div>ANY TEXT</div>
  );
};

export default App;
