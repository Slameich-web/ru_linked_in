import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Authorization } from './components/Authorization';
import { ProfilePage } from './components/ProfilePage';
import { RecoverPassword } from './components/RecoverPassword';
import { Registration } from './components/Registration';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/recover_password' element={<RecoverPassword />} />
        <Route path='/profile_page' element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
