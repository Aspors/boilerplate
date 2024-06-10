import React, { SyntheticEvent, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import footerStyles from './footer-styles.module.scss';

const Footer = () => {
  const [data, setData] = useState({ email: '', feedback: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((_data) => ({
      ..._data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = JSON.stringify(data);
    fetch('https://jsonplaceholder.org/users', {
      method: 'POST',
      body: formData,
    })
      .then((resp) => resp.json())
      .then((_data) => console.log(_data))
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => setData({ email: '', feedback: '' }));
  };

  return (
    <YMaps>
      <section className={footerStyles.mapWrapper}>
        <Map
          width={'99,5%'}
          defaultState={{ center: [33.435432, -112.29788], zoom: 10 }}
        >
          <form onSubmit={handleSubmit} id={footerStyles.form}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="feedback"
              id="feedback-area"
              placeholder="enter your feedback"
              required
              value={data.feedback}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Sumbit feedback</button>
          </form>
          <Placemark geometry={[33.435432, -112.008788]} />
        </Map>
      </section>
    </YMaps>
  );
};

export default Footer;
