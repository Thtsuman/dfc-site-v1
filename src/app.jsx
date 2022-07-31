import React from 'react';
import 'styles/global.styles.scss';
import HeroSection from 'ui_kits/molecules/HeroSection/HeroSection';
import Header from 'ui_kits/organisms/Header/Header';

const app = () => (
  <div className="app_wrapper">
    <HeroSection>
      <Header />
    </HeroSection>
  </div>
);

export default app;
