import React from 'react';
import { NavLink } from 'react-router-dom';

//import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import SelectSearchBar from 'src/containers/SelectSearchBar';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction

import './styles.scss';

const favorites = () => (
  <div className='favorites'>
    <Header />
    <LoginForm />
    <SelectSearchBar />
    <NavLink
      className='account-navlink'
      exact
      to="/AdForm"
    >
      Publier une annonce
    </NavLink>
    <h1> 😍   Mes favoris   😍</h1>
    <Card.Group className='card-group'>
      {/* {
      advertissment.map(
      (ad) => (*/}
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
        meta="description"//{ad.}
        description="price"//{ad.}
      />
      <Card
        key="id"//{ad.id}
        image="image"//{ad.}
        header="titre"//{ad.}
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

/*adResults.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};*/

export default favorites;
