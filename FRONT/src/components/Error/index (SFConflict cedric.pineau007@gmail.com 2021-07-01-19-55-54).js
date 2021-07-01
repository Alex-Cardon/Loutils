import React from 'react';

//import Header from 'src/containers/Header'; <Header />
//import Footer from 'src/components/Footer'; <Footer />
import Logo44 from 'src/assets/44.svg'
import LogoCircu from 'src/assets/circu.svg'

import './styles.scss';

const Error = () => (
  <div className='error'>
    
    <div className="container">
      <img className="quatre" src={Logo44} alt="404_svg" />
      <img className="rotating" src={LogoCircu} alt="404_svg" />
    </div>
    <div>
      <h3>
        Page introuvale
      </h3>
    </div>
    
  </div>
);

export default Error;
