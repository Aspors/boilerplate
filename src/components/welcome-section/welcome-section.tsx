import React from 'react';
import styles from './welcome-styles.module.scss';
import video from '../../assets/video/videoplayback (1).mp4';

const WelcomeSection: React.FC<{
  children?: React.ReactNode | Array<React.ReactNode>;
}> = ({ children }) => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeSectionFilter} />
      <video className={styles.footage} autoPlay loop muted>
        <source src={video} />
      </video>
      <div className={styles.welcomeSectionDescrWrapper}>
        <h1>Fox</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
      </div>
      {children}
    </section>
  );
};

export default WelcomeSection;
