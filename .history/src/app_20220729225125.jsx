import Logo from 'ui_kits/atoms/Logo/Logo';
import React from 'react';
import 'styles/global.styles.scss';
import Typography from 'ui_kits/atoms/Typography/Typography';

const app = () => (
  <div>
    <Logo />
    <Typography type="big_heading">ALL IT TAKES IS ALL YOU’VE GOT</Typography>
    <Typography type="body1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolore perspiciatis facere animi
      iste sunt sequi aperiam cum nam

      <span className="primary">numquam unde, nisi,</span>
      {' '}
      beatae, magnam esse voluptatibus nesciunt non asperiores? Ut?
    </Typography>
  </div>
);

export default app;