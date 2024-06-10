import React, { FC } from 'react';

import cardStyles from './rent-card.module.scss';

interface IRentCard {
  img: string;
  name: string;
  text: string;
  price: number;
}

const RentCard: FC<IRentCard> = ({ img, name, text, price }) => {
  return (
    <div className={cardStyles.rentCard}>
      <img className={cardStyles.rentCardImg} src={img} alt="img" />
      <span className={cardStyles.rentCardName}>{name}</span>
      <p className={cardStyles.rentCardDescr}>{text}</p>
      <span>{price}$</span>
    </div>
  );
};

export default RentCard;
