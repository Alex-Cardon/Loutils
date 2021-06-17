import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './styles.scss';

const Error = () => (
  <div className='error'>
    <Header />
    <p>Erreur 4 sans 4</p> 
    <p>C'est donc normal s'il n'y à rien de trouvé ! </p>
    <Footer />
  </div>
);

export default Error;
