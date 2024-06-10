import React from 'react';

import RentCard from '../rent-card/rent-card';

import fordImg from '../../../assets/images/FordImg.webp';

import styles from './slider.module.scss';

const SliderVechicle = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Our park</h2>
      <section className={styles.sliderContainer}>
        <RentCard
          img={fordImg}
          name={'lorem ipsum'}
          text={'lorem ipsum dolor sit amet.'}
          price={9999}
        />
        <RentCard
          img={fordImg}
          name={'lorem ipsum'}
          text={'lorem ipsum dolor sit amet.'}
          price={9999}
        />
        <RentCard
          img={fordImg}
          name={'lorem ipsum'}
          text={'lorem ipsum dolor sit amet.'}
          price={9999}
        />
        <RentCard
          img={fordImg}
          name={'lorem ipsum'}
          text={'lorem ipsum dolor sit amet.'}
          price={9999}
        />
      </section>
    </>
  );
};

export default SliderVechicle;
