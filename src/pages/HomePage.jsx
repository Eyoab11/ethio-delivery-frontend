import React from 'react';
import HeroSection from '../components/HeroSection';
import HorizontalSlider from '../components/HorizontalSlider';
import Categories from '../components/Categories'
import NearByPicks from '../components/NearByPicks'
import Footer_ from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <HorizontalSlider />
    <Categories />
    <NearByPicks />
    <Footer_ />
    </>
  );
};

export default HomePage;


