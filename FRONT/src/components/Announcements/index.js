import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction

import './styles.scss';

const announcements = () => (
  <div className='announcements'>
    <Header />
    <LoginForm />
    <NavLink
      className='account-navlink'
      exact
      to="/AdForm"
    >
      Publier une annonce
    </NavLink>
    <h1> Mes annonces</h1>
    <Card.Group className='card-group'>
      {/* {
      advertissment.map(
      (ad) => (*/}
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="title"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      {/*} ),
      )
    }*/}
    </Card.Group>
    <Footer />
  </div>
);

announcements.propTypes = {
  /*advertissement: PropTypes.arrayOf(
    PropTypes.shape({*/
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
   /* }).isRequired,
  ).isRequired,*/
};
export default announcements;
