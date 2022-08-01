import React from 'react';
import HeroSection from 'ui_kits/molecules/HeroSection/HeroSection';
import Header from 'ui_kits/organisms/Header/Header';
import ShowcaseWraper from 'ui_kits/organisms/ShowcaseWraper/ShowcaseWraper';

function HeroSectionWrapper() {
  return (
    <div>
      <HeroSection>
        <Header />
        <ShowcaseWraper />
      </HeroSection>
    </div>
  );
}

export default HeroSectionWrapper;
