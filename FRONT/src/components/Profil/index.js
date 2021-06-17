import React from 'react';
import { NavLink } from 'react-router-dom';

//import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction

import './styles.scss';

const profil = () => (
  <div className='announcements'>
    <Header />
    <LoginForm />
    <h1> Mon Profil</h1>
    <Card.Group className='card-group'>
      {/* {
      advertissment.map(
      (ad) => (*/}
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="Yvon FUMER-DES-GOELANDS"//{ad.}
        meta="LouTilseur depuis 4/06/2021"//{ad.}
        description="Coordonnées"//{ad.}
      />
      
      {/*} ),
      )
    }*/}
    </Card.Group>
    <NavLink
      className=''
      exact
      to="/"
    >
      Modifier mon profil
    </NavLink>
    <Footer />
  </div>
);

/*adResults.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};*/

export default profil;
