import React from 'react';
import logo from '../../assets/images/logo.svg';
import telegramLogo from '../../assets/images/telegram.svg';
import whatsAppLogo from '../../assets/images/whatsapp.svg';

import headerStyles from './header.module.scss';

function Header() {
  return (
    <header className={headerStyles.header}>
      <a href="#" className={headerStyles.logo}>
        <img src={logo} alt="logo" className={headerStyles.logoImg} />
        <span className={headerStyles.logoText}>fox</span>
      </a>

      <div className={headerStyles.contactUs}>
        <a href="https://t.me/aspors">
          <img src={telegramLogo} alt="logo" />
        </a>
        <a href="https://wa.me/79999999999">
          <img src={whatsAppLogo} alt="logo" />
        </a>
        <a href="tel:+79999999999" type="tel">
          +79999999999
        </a>
      </div>
    </header>
  );
}

export default Header;
