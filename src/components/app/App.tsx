import React from 'react';

import WelcomeSection from '../welcome-section/welcome-section';
import Header from '../../components/header/header';
import SliderVechicle from '../../components/slider-section/slider/slider';
import Footer from '../../components/footer/footer';

function App() {
  return (
    <>
      <WelcomeSection>
        <Header />
      </WelcomeSection>
      <SliderVechicle />
      <Footer />
    </>
  );
}

export default App;
