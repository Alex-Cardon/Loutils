import React , { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import SelectSearchBar from 'src/containers/SelectSearchBar';
import Footer from 'src/components/Footer';

import { Card } from 'semantic-ui-react';
// TODO en cours de construction
import Loading from 'src/components/Loading';
import './styles.scss';

const favorites = ({loadFavorites}) => {

  const [loading, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 1000);
    loadFavorites();
  }, []);

  if (loading) {
    return <Loading />;
  }

return(
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
    {favorites.data.map((obj) => {
        return (
          <Card
            key={obj.id}
            image={obj.picture_id}
            header={obj.title}
            meta={obj.description}
            description={obj.price}
          />
        )
      })}
    </Card.Group>
    <Footer />
  </div>
);
}

favorites.propTypes = {
  advertissement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default favorites;
