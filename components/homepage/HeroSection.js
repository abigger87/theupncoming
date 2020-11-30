import React, { Component } from 'react';
import Swiper, { EffectFade, Autoplay } from 'react-id-swiper';
import Link from 'next/link';

const params = {
  modules: [EffectFade, Autoplay],
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section position-relative">
        
      </div>
    );
  }
}
