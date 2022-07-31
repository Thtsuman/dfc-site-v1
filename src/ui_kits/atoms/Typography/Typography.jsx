import React from 'react';
import './Typography.styles.scss';

function Typography({
  type = 'body1',
  color = 'primary',
  isLink = false,
  children,
}) {
  return (
    <div className={`typography typography__${type} ${isLink && 'cursor-pointer'}`}>
      <span className={`typography__${color}`}>
        {children}
      </span>
    </div>
  );
}

export default Typography;
