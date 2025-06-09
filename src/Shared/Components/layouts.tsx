import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../../Context/useAuth';
import ButtonBack from './ButtonBack';

const Layout: React.FC = () => {
  const { user, logout } = useAuth();

  const menuItems = user ? [
    { text: "Perfil", href: "/profile" },
    { text: "Logout", href: "#", onClick: logout }
  ] : [
    { text: "Login", href: "/" }
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />
      <Outlet />
      {user && window.location.pathname !== '/' && window.location.pathname !== '/home' && <ButtonBack />}
    </>
  );
};

export default Layout;
