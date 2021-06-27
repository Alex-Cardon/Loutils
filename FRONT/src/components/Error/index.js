import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Logo44 from 'src/assets/44.svg'
import LogoCircu from 'src/assets/circu.svg'

import './styles.scss';

const Error = () => (
  <div className='error'>
    <Header />
    <div className="container">
      <img className="quatre" src={Logo44} alt="404_svg" />
      <img className="rotating" src={LogoCircu} alt="404_svg" />
    </div>
    <div>
      <h3>
        Page introuvale
      </h3>
    </div>
    <Footer />
  </div>
);

export default Error;
