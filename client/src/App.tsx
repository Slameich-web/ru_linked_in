import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Authorization } from './pages/Authorization';
import { ProfilePage } from './pages/ProfilePage';
import { RecoverPassword } from './pages/RecoverPassword';
import { Registration } from './pages/Registration';

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
