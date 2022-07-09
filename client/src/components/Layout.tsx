import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import './Layout.scss';
export const Layout = () => {
  return (
    <div className='layout_wrapper'>
      <header>Header</header>
      <div className='layout_wrapper_main'>
        <nav className='layout_wrapper_nav'>
          <CustomLink to={'/profile_page'}>profile_page</CustomLink>
          <CustomLink to={'/recover_password'}>recover_password</CustomLink>
          <CustomLink to={'/authorization'}>authorization</CustomLink>
        </nav>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
};
