import React from 'react';
import Typography from '../Typography/Typography';
import './NavbarItem.styles.scss';

function NavbarItem({
  color = 'white',
  children,
}) {
  return (
    <div className="navbar_item">
      <Typography isLink type="nav_item">
        <span className={color}>{children}</span>
      </Typography>
    </div>
  );
}

export default NavbarItem;
