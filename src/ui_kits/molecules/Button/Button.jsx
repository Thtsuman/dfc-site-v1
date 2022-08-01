import React from 'react';
import Typography from 'ui_kits/atoms/Typography/Typography';
import './Button.styles.scss';

function Button({
  children,
}) {
  return (
    <div className="button">
      <Typography type="btn_text">
        {children}
      </Typography>
    </div>
  );
}

export default Button;
