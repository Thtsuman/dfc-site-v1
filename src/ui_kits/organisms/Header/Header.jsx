import React from 'react';
import Logo from 'ui_kits/atoms/Logo/Logo';
import NavbarItems from 'ui_kits/molecules/NavbarItem/NavbarItems';
import './Header.styles.scss';

function Header() {
  return (
    <>
      <div className="navbar_overlay" />
      <div className="navbar app_margin">
        <div className="navbar_logo_wrapper">
          <Logo />
        </div>
        <NavbarItems />
      </div>
    </>
  );
}

export default Header;
