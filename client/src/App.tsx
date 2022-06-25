import React from 'react';
import { Authorization } from './components/Authorization';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {
  const { isLogin } = useTypedSelector((state) => state.login);
  return !isLogin ? (
    <div className='App'>
      <Authorization />
    </div>
  ) : (
    <div>ANY TEXT</div>
  );
};

export default App;
