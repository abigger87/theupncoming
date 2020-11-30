import React from 'react';
import Head from 'next/head';

import {
  HeroSection,
  Root,
  SocialMedia,
  ExploreBanner,
  HomeBanner,
  CategoryBanner,
  ProductsBanner,
  Footer
} from '../components';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | Up N Coming</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <CategoryBanner />
    <ProductsBanner />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
