import React from 'react';
import Typography from 'ui_kits/atoms/Typography/Typography';
import Button from 'ui_kits/molecules/Button/Button';
import './ShowcaseWrapper.styles.scss';

function ShowcaseWraper() {
  return (
    <div className="app_margin">
      <div className="showcase">
        <div className="showcase_whitespace_wrapper">
          <Typography type="big_heading">
            ALL IT
            {' '}
            <span className="primary">TAKES</span>
            {' '}
            IS
            <br />
            ALL
            {' '}
            <span className="primary">YOU’VE</span>
            {' '}
            GOT
          </Typography>

          <Typography type="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            dolore perspiciatis facere animi iste sunt sequi aperiam
            cum nam numquam unde, nisi, beatae, magnam esse voluptatibus nesciunt non
            asperiores? Ut?
          </Typography>
        </div>

        <Button>Enquire</Button>
      </div>
    </div>
  );
}

export default ShowcaseWraper;
