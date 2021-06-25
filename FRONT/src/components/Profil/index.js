import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction

import './styles.scss';

const Profil = () => (
  <div className='announcements'>
    <Header />
    <LoginForm />
    <h1> Mon Profil</h1>
    <Card.Group className='card-profil'>
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
      <div>
              <button onClick={handleDeleteAccount, msg}>supprimer mon compte></button>
      </div>
      {/*} ),
      )
    }*/}
    </Card.Group>
    <NavLink
      className=''
      exact
      to="/UpdatedProfil"
    >
      Modifier mon profil
    </NavLink>
    <Footer />
  </div>
);

Profil.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      handleDeleteAccount: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Profil;
