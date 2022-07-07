import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.scss';
export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={'/profile_page'}>profile_page</NavLink>
        <NavLink to={'/recover_password'}>recover_password</NavLink>
        <NavLink to={'/authorization'}>authorization</NavLink>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  );
};
