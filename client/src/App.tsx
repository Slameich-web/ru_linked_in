import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
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
        <Route path='/' element={<Layout />}>
          <Route path='/profile_page' element={<ProfilePage />} />
          <Route path='*' element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
