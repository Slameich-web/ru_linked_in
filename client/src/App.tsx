import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Authorization } from './pages/Authorization';
import { ProfilePage } from './pages/ProfilePage';
import { RecoverPassword } from './pages/RecoverPassword';
import { Registration } from './pages/Registration';
import { StartPage } from './pages/StartPage';
import { RequireAuth } from './hoc/RequireAuth';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/recover_password' element={<RecoverPassword />} />
        <Route path='/start_page' element={<StartPage />} />
        <Route path='/' element={<Layout />}>
          <Route
            path='/profile_page'
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path='/profile_page/:id'
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path='*'
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
