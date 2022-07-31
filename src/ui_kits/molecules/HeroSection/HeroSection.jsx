import assets from 'assets';
import React from 'react';
import './HeroSection.styles.scss';

function HeroSection({
  children,
}) {
  return (
    <div className="hero_section">
      <img className="hero_section_img" src={assets.images.heroSectionBg} alt="" />
      <div className="hero_section_overlay" />
      {children}
    </div>
  );
}

export default HeroSection;
