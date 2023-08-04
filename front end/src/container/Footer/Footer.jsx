import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  
  return (
    <>
      <h2 className="head-text">Let's order Ice coffee & chat ?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mh763374@dal.ca" className="p-text">mh763374@dal.ca</a>
        </div>

        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:sohaibk10@gmail.com" className="p-text">sohaibk10@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (902) 580-4947" className="p-text">+1 (902) 580-4947</a>
        </div>
      </div>
    </>
  );
    
};



export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);