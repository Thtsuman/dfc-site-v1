import React from 'react';
import NavbarItem from 'ui_kits/atoms/NavbarItem/NavbarItem';
import './NavbarItems.styles.scss';

function NavbarItems() {
  return (
    <div className="navbar_items">
      <NavbarItem>About Us</NavbarItem>
      <NavbarItem>Services</NavbarItem>
      <NavbarItem color="primary">Contact Us</NavbarItem>
    </div>
  );
}

export default NavbarItems;
