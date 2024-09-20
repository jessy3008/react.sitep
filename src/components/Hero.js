import React from 'react';
import './Hero.css';
import heroImage from '../img/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src={heroImage} alt="Jessica Silva" />
        <div className="hero-text">
          <h1>Jessica Silva</h1>
          <p>Desenvolvedora Front-end | Social media</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
